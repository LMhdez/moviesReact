import MoviesCard from "./MoviesCard";

const RelatedMovies = ({ relatedMovies }) => {
	return (
		<>
			<div className="mx-12 ">
				<div className="flex flex-row justify-between items-center mb-8">
				<h2 className=" text-2xl font-bold ">Related Movies</h2>
				<p className="underline">See all</p>
				</div>
				{relatedMovies && relatedMovies.length > 0 && (
				<ul className="flex flex-row gap-8 flex-wrap">
					{relatedMovies.map((movie, index) => (
						<li key={index}>
							<MoviesCard movie={movie} />
						</li>
					))}
				</ul>
				)}
				{relatedMovies && relatedMovies.length === 0 && (
                <p className="text-center text-xl">No related movies found.</p>
                )}
			</div>
		</>
	);
};

export default RelatedMovies;
