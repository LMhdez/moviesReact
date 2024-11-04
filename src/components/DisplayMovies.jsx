
import MoviesCard from "./MoviesCard";

const DisplayMovies = ({ movies}) => {
	return (
    <div className="">
      {movies.length > 0 ? (
        <ul className="flex flex-row flex-wrap gap-3">
          {movies.map((movie, index) => (
            <li key={index}>
              <MoviesCard movie={movie} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Não existem resultados para os filtros selecionados.</p>
      )}
    </div>
  );
};

export default DisplayMovies;
