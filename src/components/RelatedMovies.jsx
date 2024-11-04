import MoviesCard from "./MoviesCard";

const RelatedMovies = ({ relatedMovies }) => {
	return (
		<>
			<div>
				<h2>Related Movies</h2>
				<ul className="">
					{relatedMovies.map((movie, index) => (
						<li key={index}>
							<MoviesCard movie={movie} />
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default RelatedMovies;
