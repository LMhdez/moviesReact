import { Link } from "react-router-dom";
import MoviesCard from "./MoviesCard";

const RelatedMovies = ({ relatedMovies }) => {
	return (
		<>
			<div className="px-12 w-full">
				<div className="flex flex-row  justify-between items-center mb-8">
				<h2 className=" text-2xl font-bold ">Related Movies</h2>
				<Link to={"/movies"} className="underline">See all</Link>
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
                <p className=" text-xl">No related movies found.</p>
                )}
			</div>
		</>
	);
};

export default RelatedMovies;
