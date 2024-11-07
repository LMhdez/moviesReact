import useFetch from "../hooks/useFetch";
import { isFavorite } from "../hooks/handleFavorites";
import MoviesCard from "../components/MoviesCard";

const WishList = ({ movies }) => {
	const favoriteMovies = movies.filter((m) => isFavorite(m.id));

	return (
		<>
			<div className="m-12">
				{favoriteMovies.length > 0 ?
					<ul className=" flex md:flex-row flex-column justify-center md:justify-start gap-8 flex-wrap">
						{favoriteMovies.map((movie, index) => (
							<li key={index}>
								<MoviesCard movie={movie} />
							</li>
						))}
					</ul>
				:	<p className="text-center text-xl">
						No movies in your wish list.
					</p>
				}
			</div>
		</>
	);
};

export default WishList;
