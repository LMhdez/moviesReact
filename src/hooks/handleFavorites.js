const addFavorite = (movieId) => {
	const favorites = JSON.parse(sessionStorage.getItem("favorites")) || [];

	if (!isFavorite(movieId)) {
		favorites.push(movieId);
		try {
			sessionStorage.setItem("favorites", JSON.stringify(favorites));
			return true;
		} catch (error) {
			return false;
		}
	}
};

const removeFavorite = (movieId) => {
	const favorites = JSON.parse(sessionStorage.getItem("favorites")) || [];

	
	if (isFavorite(movieId)) {
		favorites.splice(favorites.indexOf(movieId), 1);
		try {
			sessionStorage.setItem("favorites", JSON.stringify(favorites));
			return true;
		} catch (error) {
			return false;
		}
	}
};

const isFavorite = (movieId) => {
	const favorites = JSON.parse(sessionStorage.getItem("favorites")) || [];
	return favorites.indexOf(movieId) > -1;
};

const getFavorites = () => {
	return JSON.parse(sessionStorage.getItem("favorites")) || [];
}

export { addFavorite, removeFavorite, isFavorite, getFavorites };
