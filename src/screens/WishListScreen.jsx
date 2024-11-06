import WishList from "../components/WishList";
import Header from "../components/Header";
import Footer from "../components/Footer";

import useFetch from "../hooks/useFetch";

const WishListScreen = () => {
	const [movies, moviesLoading, moviesError] = useFetch(
		"https://moviesfunctionapp.azurewebsites.net/api/GetMovies"
	);
	return (
		<div>
			<main>
				<Header />
				{moviesLoading && <p>Loading...</p>}
				{moviesError && !moviesLoading && <p>{moviesError}</p>}
				{movies && !moviesLoading && (
					<WishList
						movies={movies}
						moviesLoading={moviesLoading}
						moviesError={moviesError}
					/>
				)}
			</main>
			<Footer />
		</div>
	);
};

export default WishListScreen;
