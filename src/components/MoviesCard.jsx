import { useState } from "react";
import {
	addFavorite,
	removeFavorite,
	isFavorite,
} from "../hooks/handleFavorites";

import Heart from "../../public/svgs/heart";

import { Link } from "react-router-dom";

const MoviesCard = ({ movie }) => {
	const [color, setColor] = useState(isFavorite(movie.id) ? "red" : "black");

	const handleFavorite = (event) => {
		event.preventDefault();

		if (isFavorite(movie.id)) {
			removeFavorite(movie.id);
			setColor("black");
		} else {
			addFavorite(movie.id);
			setColor("red");
		}
	};

	return (
		<div className="w-64 bg-gray-100 rounded-lg overflow-hidden shadow-lg flex flex-col"> 
			<Link to={"/movies/" + movie.id}>
				<img
					src={movie.posterUrl}
					alt={movie.title}
					className="w-full h-80 object-cover" 
				/>
				<div className="p-3"> 
					<div className="flex justify-end m-2">
						<button
							type="button"
							onClick={handleFavorite}
							className="size-8"
						>
							<Heart color={color} />
						</button>
					</div>
					<div className="mt-2 text-gray-800">
						<p className="text-sm text-gray-600">{movie.genres}</p>
						<h2 className="text-base font-semibold mt-1"> 
							{movie.title}
						</h2>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default MoviesCard;
