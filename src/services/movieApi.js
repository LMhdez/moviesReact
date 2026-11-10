const CATALOG_URL = "https://cinemeta-catalogs.strem.io/top/catalog/movie/top.json";
const META_URL = "https://v3-cinemeta.strem.io/meta/movie";
const REVIEW_STORAGE_KEY = "movies-react-reviews";
const GENRES = [
  "Action", "Adventure", "Animation", "Biography", "Comedy", "Crime",
  "Documentary", "Drama", "Family", "Fantasy", "History", "Horror",
  "Mystery", "Romance", "Sci-Fi", "Sport", "Thriller", "War", "Western",
];

let catalogCache = null;
let catalogCacheTime = 0;
const CACHE_MS = 5 * 60 * 1000;

const normalizeMovie = (meta) => {
  const genreList = meta.genres || meta.genre || [];
  return {
    id: meta.id || meta.imdb_id,
    title: meta.name || meta.title || "Untitled",
    summary: meta.description || "No synopsis available.",
    posterUrl: meta.poster || "",
    image: meta.background || meta.poster || "",
    year: meta.year || meta.releaseInfo || "",
    runtime: meta.runtime || "Unknown",
    genres: genreList.join(", "),
    genreList,
    director: meta.director || [],
    actors: meta.cast || [],
    rating: meta.imdbRating || "",
    released: meta.released || "",
  };
};

const fetchJson = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Movie data service returned HTTP ${response.status}.`);
  return response.json();
};

const getCatalog = async () => {
  if (catalogCache && Date.now() - catalogCacheTime < CACHE_MS) return catalogCache;
  const data = await fetchJson(CATALOG_URL);
  if (!Array.isArray(data.metas)) throw new Error("Movie data service returned an unexpected catalogue.");
  catalogCache = data.metas.map(normalizeMovie);
  catalogCacheTime = Date.now();
  return catalogCache;
};

export const getGenres = async () => GENRES;

export const getMovies = async ({ genres = [], sortBy = "relevance" } = {}) => {
  let movies = await getCatalog();
  if (genres.length) {
    movies = movies.filter((movie) => genres.every((genre) => movie.genreList.includes(genre)));
  }
  movies = [...movies];
  if (sortBy === "name") movies.sort((a, b) => a.title.localeCompare(b.title));
  if (sortBy === "releaseDate") movies.sort((a, b) => Number(b.year) - Number(a.year));
  return movies;
};

export const getMovie = async (id) => {
  if (!id) return null;
  try {
    const data = await fetchJson(`${META_URL}/${encodeURIComponent(id)}.json`);
    if (data.meta) return normalizeMovie(data.meta);
  } catch {
    // Use the catalogue as a fallback when detailed metadata is unavailable.
  }
  const catalog = await getCatalog();
  return catalog.find((movie) => movie.id === id) || null;
};

export const getRelatedMovies = async (id) => {
  const movie = await getMovie(id);
  if (!movie) return [];
  const catalog = await getCatalog();
  return catalog
    .filter((candidate) => candidate.id !== id &&
      candidate.genreList.some((genre) => movie.genreList.includes(genre)))
    .slice(0, 6);
};

export const getHeadline = async () => {
  const movie = (await getCatalog())[0];
  if (!movie) throw new Error("No featured movie is currently available.");
  return { id: movie.id, title: movie.title, description: movie.summary, image: movie.image };
};

const readReviews = () => {
  try {
    const value = JSON.parse(localStorage.getItem(REVIEW_STORAGE_KEY) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
};

export const getReviews = async (movieId) => {
  const reviews = readReviews().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (!movieId) return reviews;
  const movie = await getMovie(movieId);
  return reviews.filter((review) => review.movie === movie?.title);
};

export const submitReview = (formData) => {
  try {
    const reviews = readReviews();
    reviews.unshift({
      title: formData.title.trim(),
      text: formData.text.trim(),
      rating: Number(formData.rating),
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      movie: formData.movie,
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem(REVIEW_STORAGE_KEY, JSON.stringify(reviews));
    return true;
  } catch {
    return false;
  }
};

export const getFavoriteMovies = async () => {
  let ids = [];
  try {
    ids = JSON.parse(sessionStorage.getItem("favorites") || "[]");
  } catch {
    ids = [];
  }
  return (await Promise.all(ids.map((id) => getMovie(id)))).filter(Boolean);
};
