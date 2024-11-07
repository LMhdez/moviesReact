import Heart from "../../public/svgs/heart";
import { useState } from "react";
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
		<div className="flex md:flex-row flex-col px-12 my-8">
			<img
				src={movie.posterUrl}
				alt={movie.title}
				className="m-4 rounded-md ml-0 w-[200px] h-[300px]"
			/>
			<div className="my-8 mx-4 md:mx-0">
				<div className="flex items-center mb-4">
					<h2 className="text-2xl font-bold">{movie.title}</h2>
					<button
						type="button"
						onClick={handleFavorite}
						className="ml-4"
					>
						<Heart color={color} />
					</button>
				</div>

				<p className="my-4 h-12 flex items-center justify-center">{movie.summary}</p>
				
				<div className="mb-4">
					<p>
						<b>Year:</b> {movie.year}
					</p>
					<p>
						<b>Duration:</b> {movie.runtime}
					</p>
					<p>
						<b>Category:</b> {movie.genres}
					</p>
				</div>

				<div className="flex flex-col md:flex-row gap-8 md:gap-16">
					<div>
						<p>
							<b>Director:</b>
						</p>
						<ul className="list-disc list-inside">
							{movie.director.map((director, index) => (
								<li key={index}>{director}</li>
							))}
						</ul>
					</div>
					<div>
						<p>
							<b>Actors:</b>
						</p>
						<ul className="list-disc list-inside">
							{movie.actors.map((actor, index) => (
								<li key={index}>{actor}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
