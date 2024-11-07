import useFetch from "../hooks/useFetch";
import { isFavorite } from "../hooks/handleFavorites";
import MoviesCard from "../components/MoviesCard";

const WishList = ({ movies}) => {
	return (
		<>
			<div className="m-12">
				<h2 className="text-2xl font-bold my-8">Wish List</h2>
				<ul className=" flex md:flex-row flex-column justify-center md:justify-start gap-8 flex-wrap">
					{movies.map(
						(movie, index) =>
							isFavorite(movie.id) && (
								<li key={index}>
									<MoviesCard movie={movie} />
								</li>
							)
					)}
				</ul>
			</div>
		</>
	);
};

export default WishList;
