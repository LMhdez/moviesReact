import MoviesCard from "./MoviesCard";

const DisplayMovies = ({ movies }) => {
	return (
		<div className="">
			{movies.length > 0 ?
				<ul className="flex flex-row flex-wrap gap-3 justify-center md:justify-start ">
					{movies.map((movie, index) => (
						<li key={index}>
							<MoviesCard movie={movie} />
						</li>
					))}
				</ul>
			:	<p>No results found for the selected filters.</p>}
		</div>
	);
};

export default DisplayMovies;
