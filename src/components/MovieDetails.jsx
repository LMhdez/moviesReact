import Heart from "../../public/svgs/heart";
import { useEffect, useState } from "react";
import {
	addFavorite,
	removeFavorite,
	isFavorite,
} from "../hooks/handleFavorites";

const MovieDetails = ({ movie }) => {
	const [color, setColor] = useState(
		movie && isFavorite(movie.id) ? "red" : "black"
	);

	const handleFavorite = () => {
		if (isFavorite(movie.id)) {
			removeFavorite(movie.id);
			setColor("black");
		} else {
			addFavorite(movie.id);
			setColor("red");
		}
	};
	return (
		<>
			<div className="movieDetails">
				<img src={movie.posterUrl} alt={movie.title} />
				<h2>{movie.title}</h2>
				<button
					type="button"
					onClick={handleFavorite}
					className="size-8"
				>
					<Heart color={color} />
				</button>
				<p>{movie.summary}</p>
				<p>Year: {movie.year}</p>
				<p>Duration: {movie.runtime}</p>
				<p>Duration: {movie.runtime}</p>
				<p>Category: {movie.genre}</p>
				<p>Director: </p>
				<ul className="list-disc pl-8">
					{movie.director.map((director, index) => (
						<li key={index}>{director}</li>
					))}
				</ul>
				<p>Actors: </p>
				<ul className="list-disc pl-8">
					{movie.actors.map((actor, index) => (
						<li key={index}>{actor}</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default MovieDetails;
