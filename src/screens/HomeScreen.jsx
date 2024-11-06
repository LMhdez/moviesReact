import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import Reviews from "../components/Reviews";
import useFetch from "../hooks/useFetch";



const HomeScreen = () => {
	const [headline, isLoadingHeadline, errorMessageHeadline] = useFetch(
		"https://moviesfunctionapp.azurewebsites.net/api/GetHeadline"
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
			{isLoadingHeadline && <p>Loading...</p>}
			{errorMessageHeadline && !isLoadingHeadline && (
				<p>{errorMessageHeadline}</p>
			)}
			{headline && !isLoadingHeadline && <HeroBanner headline={headline} />}

			{isLoadingGeneralReviews && <p>Loading...</p>}
			{errorMessageGeneralReviews && !isLoadingGeneralReviews && (
				<p>{errorMessageGeneralReviews}</p>
			)}
			{generalReviews && !isLoadingGeneralReviews && <Reviews reviews={generalReviews} />}
			</main>
			<Footer />
		</div>
	);
};

export default HomeScreen;
