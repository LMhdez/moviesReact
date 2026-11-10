import { useEffect, useState } from "react";
import {
  getFavoriteMovies, getGenres, getHeadline, getMovie, getMovies,
  getRelatedMovies, getReviews,
} from "../services/movieApi";

const resolveResource = (resource) => {
  const [name, query = ""] = resource.split("?");
  const params = new URLSearchParams(query);
  switch (name) {
    case "headline": return getHeadline();
    case "genres": return getGenres();
    case "movies":
      return getMovies({
        genres: params.get("genres") ? params.get("genres").split(",").filter(Boolean) : [],
        sortBy: params.get("sortBy") || "relevance",
      });
    case "movie": return getMovie(params.get("id"));
    case "related": return getRelatedMovies(params.get("id"));
    case "reviews": return getReviews(params.get("id"));
    case "favorites": return getFavoriteMovies();
    default: throw new Error("Unknown movie data request.");
  }
};

const useFetch = (resource) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let active = true;
    const load = async () => {
      setIsLoading(true);
      setErrorMessage("");
      try {
        const result = await resolveResource(resource);
        if (active) setData(result);
      } catch (error) {
        if (active) {
          setData(null);
          setErrorMessage(error.message || "Unable to load movie data.");
        }
      } finally {
        if (active) setIsLoading(false);
      }
    };
    load();
    return () => { active = false; };
  }, [resource]);

  return [data, isLoading, errorMessage];
};

export default useFetch;
