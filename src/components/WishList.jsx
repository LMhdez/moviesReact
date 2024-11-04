import useFetch from "../hooks/useFetch";
import { isFavorite } from "../hooks/handleFavorites";
import MoviesCard from "../components/MoviesCard";

const WishList = ({ movies}) => {
	return (
		<>
			<div>
				<h2>Wish List</h2>
				<ul className="">
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
