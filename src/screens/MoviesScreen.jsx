import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DisplayMovies from "../components/DisplayMovies";
import Filters from "../components/Filters";
import SortOptions from "../components/SortOptions";
import useFetch from "../hooks/useFetch";

const MoviesScreen = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [sortBy, setSortBy] = useState("relevance");
  const resource = `movies?genres=${encodeURIComponent(selectedGenres.join(","))}&sortBy=${encodeURIComponent(sortBy)}`;
  const [genres, genresLoading, genresError] = useFetch("genres");
  const [movies, moviesLoading, moviesError] = useFetch(resource);

  const handleGenreChange = (genre) => {
    setSelectedGenres((current) => current.includes(genre)
      ? current.filter((item) => item !== genre)
      : [...current, genre]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col md:flex-row flex-grow">
        <aside className="md:w-1/4 p-4 bg-gray-100 rounded shadow static md:sticky top-0 md:h-full mb-4 md:mb-0">
          {genresLoading && <p>Genres Loading...</p>}
          {genresError && <p>{genresError}</p>}
          {genres && !genresLoading && <Filters genres={genres} selectedGenres={selectedGenres} onGenreChange={handleGenreChange} />}
        </aside>
        <div className="md:w-3/4 p-4">
          {moviesLoading && <p>Movies Loading...</p>}
          {moviesError && <p>{moviesError}</p>}
          {movies && !moviesLoading && (
            <>
              <div className="flex flex-row justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">All Movies</h1>
                <SortOptions sortBy={sortBy} handleSortChange={setSortBy} />
              </div>
              <DisplayMovies movies={movies} />
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MoviesScreen;
