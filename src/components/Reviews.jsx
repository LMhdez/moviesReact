import useFetch from "../hooks/useFetch";
import ReviewsCard from "./ReviewsCard";

const Reviews = ({ reviews }) => {
  return (
    <>
      <div className="mx-12 mt-8">
        <h2 className="font-black ">Last Reviews</h2>
        {reviews && reviews.length > 0 && (
          <ul className="flex flex-row flex-wrap justify-center sm:justify-start items-start">
            {reviews.map((review, index) => (
              <li key={index} className="w-1/2 min-w-72">
                {review && <ReviewsCard review={review} />}
              </li>
            ))}
          </ul>
        )}
        {reviews && reviews.length === 0 && <p className="text-center text-lg mb-4">No reviews available.</p>}
      </div>
    </>
  );
};

export default Reviews;
