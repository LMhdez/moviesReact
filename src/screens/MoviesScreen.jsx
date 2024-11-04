import  Header  from "../components/Header";
import Footer  from "../components/Footer";
import DisplayMovies from "../components/DisplayMovies";
import Filters from "../components/Filters";
import SortOptions from "../components/SortOptions";

import useFetch from "../hooks/useFetch";
import { useState, useEffect } from "react";

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
		<div>
            <Header />
			<h1>Filmes</h1>
			{genresLoading && <p>Carregando gêneros...</p>}
            {genresError && <p>Erro ao carregar gêneros: {genresError}</p>}
			{genres && !genresLoading &&(
			<Filters
				genres={genres}
				selectedGenres={selectedGenres}
				onGenreChange={handleGenreChange}
				genresLoading={genresLoading}
				genresError={genresError}
			/>)}
			<SortOptions sortBy={sortBy} handleSortChange={handleSortChange} />
			{moviesLoading && <p>Carregando filmes...</p>}
			{moviesError && <p>Erro ao carregar filmes: {moviesError}</p>}
			{movies && !moviesLoading && (
			<DisplayMovies
				movies={movies}
				
			/>)}
            <Footer />
		</div>
	);
};

export default MoviesScreen;
