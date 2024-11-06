import Header from "../components/Header";
import Footer from "../components/Footer";
import DisplayMovies from "../components/DisplayMovies";
import Filters from "../components/Filters";
import SortOptions from "../components/SortOptions";

import useFetch from "../hooks/useFetch";
import { useState } from "react";

const MoviesScreen = () => {
	const [selectedGenres, setSelectedGenres] = useState([]);
	const [sortBy, setSortBy] = useState("relevance");

	const buildMoviesUrl = () => {
		const baseUrl =
			"https://moviesfunctionapp.azurewebsites.net/api/GetMovies";
		let url = baseUrl;

		if (selectedGenres.length > 0) {
			const categoriesParam = selectedGenres
				.map((genre) => `"${genre}"`)
				.join(",");
			url += `?category=[${categoriesParam}]`;
		}

		if (sortBy) {
			url +=
				selectedGenres.length > 0 ?
					`&sortBy=${sortBy}`
				:	`?sortBy=${sortBy}`;
		}

		return url;
	};

	const [genres, genresLoading, genresError] = useFetch(
		"https://moviesfunctionapp.azurewebsites.net/api/GetGenres"
	);

	const [movies, moviesLoading, moviesError] = useFetch(buildMoviesUrl());

	const handleGenreChange = (genre) => {
		const currentGenres = [...selectedGenres];

		const index = currentGenres.indexOf(genre);

		if (index === -1) {
			currentGenres.push(genre);
		} else {
			currentGenres.splice(index, 1);
		}

		setSelectedGenres(currentGenres);
	};

	const handleSortChange = (sortOption) => {
		setSortBy(sortOption);
	};

	return (
		<div className="flex flex-col min-h-screen">
			<Header />

			<main className="flex flex-col md:flex-row flex-grow">
				<aside className="md:w-1/4 p-4 bg-gray-100 rounded shadow sticky top-0 md:h-full mb-4 md:mb-0">
					{genresLoading && <p>Carregando gêneros...</p>}
					{genresError && (
						<p>Erro ao carregar gêneros: {genresError}</p>
					)}
					{genres && !genresLoading && (
						<Filters
							genres={genres}
							selectedGenres={selectedGenres}
							onGenreChange={handleGenreChange}
							genresLoading={genresLoading}
							genresError={genresError}
						/>
					)}
				</aside>

				<div className="md:w-3/4 p-4">
					{moviesLoading && <p>Carregando filmes...</p>}
					{moviesError && (
						<p>Erro ao carregar filmes: {moviesError}</p>
					)}
					{movies && !moviesLoading && (
						<>
							<div className="flex flex-row justify-between items-center mb-4">
								<h1 className="text-2xl font-bold">
									All Movies
								</h1>
								<SortOptions
									sortBy={sortBy}
									handleSortChange={handleSortChange}
								/>
							</div>
							<DisplayMovies movies={movies} />
						</>
					)}
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default MoviesScreen;
