import { useEffect, useState } from "react";
import {
  addFavorite,
  removeFavorite,
  isFavorite,
} from "../hooks/handleFavorites";

import Heart from "../../public/svgs/heart";

import { Link } from "react-router-dom";

const MoviesCard = ({ movie }) => {
  const [color, setColor] = useState(isFavorite(movie.id) ? "red" : "black");

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
    <div className=" flex flex-col w-94 bg-gray-100 p-0.5 ">
      <Link to={"/movies/" + movie.id}>
        <img src={movie.posterUrl} alt={movie.title} height={100} width={300} className="" />
        <div>
          <div className="flex justify-end m-2">
            <button type="button" onClick={handleFavorite} className="size-8">
              <Heart color={color} />
            </button>
          </div>
          <div className="w-24 m-4">
            <p>{movie.genres}</p>

            <h2>{movie.title}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MoviesCard;
