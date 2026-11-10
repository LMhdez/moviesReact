const ReviewsCard = ({ review }) => {
  const reviewerName = [review.firstName, review.lastName].filter(Boolean).join(" ");
  return (
    <div className="flex flex-col m-8">
      <div className="flex flex-row justify-between font-semibold align-middle">
        <h3>{review.title}</h3>
        <div className="bg-yellow-200 p-1"><p>{review.rating}</p></div>
      </div>
      <h2 className="font-black">{review.movie}</h2>
      <p>{review.text}</p>
      {reviewerName && <p className="text-zinc-500">{reviewerName}</p>}
    </div>
  );
};

export default ReviewsCard;
