import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieDetails from "../components/MovieDetails";
import RelatedMovies from "../components/RelatedMovies";
import Reviews from "../components/Reviews";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

const DetailsScreen = () => {
	const id = useParams().id;

	const [movie, isLoadingMovie, errorMessageMovie] = useFetch(
		"https://moviesfunctionapp.azurewebsites.net/api/GetMovies?id=" + id
	);
	const [relatedMovies, isLoadingRelatedMovies, errorMessageRelatedMovies] =
		useFetch(
			"https://moviesfunctionapp.azurewebsites.net/api/GetRelated?id=" +
				id
		);
	const [movieReviews, isLoadingMovieReviews, errorMessageMovieReviews] =
		useFetch(
			"https://moviesfunctionapp.azurewebsites.net/api/GetReviews?id=" +
				id
		);
	return (
		<div>
			<Header />
			{isLoadingMovie && <p>Loading...</p>}
			{errorMessageMovie && !isLoadingMovie && <p>{errorMessageMovie}</p>}
			{movie && !isLoadingMovie && <MovieDetails movie={movie} />}
			{isLoadingRelatedMovies && <p>Loading...</p>}
			{errorMessageRelatedMovies && !isLoadingRelatedMovies && (
				<p>{errorMessageRelatedMovies}</p>
			)}
			{relatedMovies && !isLoadingRelatedMovies && (
				<RelatedMovies
					relatedMovies={relatedMovies}
					isLoadingRelatedMovies={isLoadingRelatedMovies}
					errorMessageRelatedMovies={errorMessageRelatedMovies}
				/>
			)}
			{isLoadingMovieReviews && <p>Loading...</p>}
			{errorMessageMovieReviews && !isLoadingMovieReviews && (
				<p>{errorMessageMovieReviews}</p>
			)}
			{movieReviews && !isLoadingMovieReviews && (
				<Reviews
					reviews={movieReviews}
					isLoadingMovieReviews={isLoadingMovieReviews}
					errorMessageMovieReviews={errorMessageMovieReviews}
				/>
			)}
			<Footer />
		</div>
	);
};

export default DetailsScreen;
