const ReviewsCard = ({ review }) => {
	return (
		<div className="flex flex-col m-8">
			<div className="flex flex-row justify-between font-semibold align-middle">
				<h3>{review.title}</h3>
				<div className="bg-yellow-200 p-1">
					<p>{review.rating}</p>
				</div>
			</div>
			<h2 className="font-black">{review.movie}</h2>
			<p>{review.text}</p>
			<p className="text-zinc-500	">
				{review.first_name + review.last_name} -{" "}
				{"(" + review.email + ")"}
			</p>
		</div>
	);
};

export default ReviewsCard;
