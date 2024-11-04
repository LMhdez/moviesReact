import useFetch from "../hooks/useFetch";
import ReviewsCard from "./ReviewsCard";

const Reviews = ({ reviews }) => {
	return (
		<>
			<div>
				<h2 className="font-black ml-8">Last Reviews</h2>
				<ul className="flex flex-row flex-wrap justify-center sm:justify-start items-start">
					{reviews.map((review, index) => (
						<li key={index} className="w-1/2 min-w-72">
							{review && <ReviewsCard review={review} />}
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Reviews;
