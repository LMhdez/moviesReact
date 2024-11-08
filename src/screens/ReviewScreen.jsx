import Header from "../components/Header";
import Footer from "../components/Footer";
import ReviewForm from "../components/ReviewForm";
import Reviews from "../components/Reviews";

import useFetch from "../hooks/useFetch";

const ReviewScreen = () => {
	const [movies, moviesLoading, moviesError] = useFetch(
		"https://moviesfunctionapp.azurewebsites.net/api/GetMovies?sortBy=name"
	);

	const [
		generalReviews,
		isLoadingGeneralReviews,
		errorMessageGeneralReviews,
	] = useFetch("https://moviesfunctionapp.azurewebsites.net/api/GetReviews");
	return (
		<div>
			<Header />
			<main>
				<ReviewForm
					movies={movies}
					moviesLoading={moviesLoading}
					moviesError={moviesError}
				/>
				{isLoadingGeneralReviews && <p>Loading...</p>}
				{errorMessageGeneralReviews && !isLoadingGeneralReviews && (
					<p>{errorMessageGeneralReviews}</p>
				)}
				{generalReviews && !isLoadingGeneralReviews && (
					<Reviews reviews={generalReviews} />
				)}
			</main>
			<Footer />
		</div>
	);
};

export default ReviewScreen;
