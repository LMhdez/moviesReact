import Header from "../components/Header";
import Footer from "../components/Footer";
import ReviewForm from "../components/ReviewForm";
import Reviews from "../components/Reviews";

import useFetch from "../hooks/useFetch";

const ReviewScreen = () => {
	const [
		generalReviews,
		isLoadingGeneralReviews,
		errorMessageGeneralReviews,
	] = useFetch("https://moviesfunctionapp.azurewebsites.net/api/GetReviews");
	return (
		<div>
			<Header />
			<ReviewForm />
			{isLoadingGeneralReviews && <p>Loading...</p>}
			{errorMessageGeneralReviews && !isLoadingGeneralReviews && (
				<p>{errorMessageGeneralReviews}</p>
			)}
			{generalReviews && !isLoadingGeneralReviews && (
				<Reviews reviews={generalReviews} />
			)}
			<Footer />
		</div>
	);
};

export default ReviewScreen;
