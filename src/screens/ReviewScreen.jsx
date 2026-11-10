import Header from "../components/Header";
import Footer from "../components/Footer";
import ReviewForm from "../components/ReviewForm";
import Reviews from "../components/Reviews";
import useFetch from "../hooks/useFetch";

const ReviewScreen = () => {
  const [movies, moviesLoading, moviesError] = useFetch("movies?sortBy=name");
  const [generalReviews, isLoadingGeneralReviews, errorMessageGeneralReviews] = useFetch("reviews");

  return (
    <div>
      <Header />
      <main>
        <p className="mx-auto max-w-2xl px-4 text-sm text-gray-600">
          Reviews are saved only in this browser. They are not shared with other visitors or synced between devices.
        </p>
        <ReviewForm movies={movies} moviesLoading={moviesLoading} moviesError={moviesError} />
        {isLoadingGeneralReviews && <p>Loading...</p>}
        {errorMessageGeneralReviews && !isLoadingGeneralReviews && <p>{errorMessageGeneralReviews}</p>}
        {generalReviews && !isLoadingGeneralReviews && <Reviews reviews={generalReviews} />}
      </main>
      <Footer />
    </div>
  );
};

export default ReviewScreen;
