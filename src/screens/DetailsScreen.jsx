import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieDetails from "../components/MovieDetails";
import RelatedMovies from "../components/RelatedMovies";
import Reviews from "../components/Reviews";
import useFetch from "../hooks/useFetch";
import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const DetailsScreen = () => {
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => { window.scrollTo({ top: 0 }); }, [location]);

  const [movie, isLoadingMovie, errorMessageMovie] = useFetch(`movie?id=${encodeURIComponent(id)}`);
  const [relatedMovies, isLoadingRelatedMovies, errorMessageRelatedMovies] =
    useFetch(`related?id=${encodeURIComponent(id)}`);
  const [movieReviews, isLoadingMovieReviews, errorMessageMovieReviews] =
    useFetch(`reviews?id=${encodeURIComponent(id)}`);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col justify-center">
        {isLoadingMovie && <p>Loading...</p>}
        {errorMessageMovie && !isLoadingMovie && (
          <div className="flex flex-grow items-center justify-center text-center flex-col gap-3">
            <h2 className="text-2xl font-semibold text-center">{errorMessageMovie}</h2>
            <Link to="/" className="">
              <button className="p-3 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-500">
                Back to Home Page
              </button>
            </Link>
          </div>
        )}
        {movie && !isLoadingMovie && <MovieDetails movie={movie} />}
        {isLoadingRelatedMovies && <p>Loading...</p>}
        {errorMessageRelatedMovies && !isLoadingRelatedMovies && <p>{errorMessageRelatedMovies}</p>}
        {relatedMovies && !isLoadingRelatedMovies && movie && <RelatedMovies relatedMovies={relatedMovies} />}
        {isLoadingMovieReviews && <p>Loading...</p>}
        {errorMessageMovieReviews && !isLoadingMovieReviews && <p>{errorMessageMovieReviews}</p>}
        {movieReviews && !isLoadingMovieReviews && <Reviews reviews={movieReviews} />}
      </main>
      <Footer />
    </div>
  );
};

export default DetailsScreen;
