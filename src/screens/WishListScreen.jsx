import WishList from "../components/WishList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useFetch from "../hooks/useFetch";

const WishListScreen = () => {
	const [movies, moviesLoading, moviesError] = useFetch(
		"https://moviesfunctionapp.azurewebsites.net/api/GetMovies"
	);

	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-grow flex flex-col">
				{moviesLoading && <p>Loading...</p>}
				{moviesError && !moviesLoading && <p>{moviesError}</p>}
				{movies && !moviesLoading && (
					<>
						<h2 className="text-2xl font-bold mt-8 ml-12">
							Wish List
						</h2>

						<WishList
							movies={movies}
							moviesLoading={moviesLoading}
							moviesError={moviesError}
						/>
					</>
				)}
			</main>
			<Footer />
		</div>
	);
};

export default WishListScreen;
