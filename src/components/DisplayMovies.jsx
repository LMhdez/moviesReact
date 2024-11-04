
import MoviesCard from "./MoviesCard";

const DisplayMovies = ({ movies}) => {
	return (
		<div>
			{ movies.length > 0 ?
				<ul>
					{movies.map((movie, index) => (
						<li key={index}>
							<MoviesCard movie={movie} />
						</li>
					))}
				</ul>
			: (
					<p>Não existem resultados para os filtros selecionados.</p>
				)
			}
		</div>
	);
};

export default DisplayMovies;
