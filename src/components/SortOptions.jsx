const SortOptions = ({ sortBy, handleSortChange }) => {
	return (
		<select
			value={sortBy}
			onChange={(event) => handleSortChange(event.target.value)}
		>
			<option value="relevance">Relevância</option>
			<option value="releaseDate">Data de lançamento</option>
			<option value="rating">Avaliação</option>
		</select>
	);
};
export default SortOptions