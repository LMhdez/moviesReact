const SortOptions = ({ sortBy, handleSortChange }) => {
	return (
		<select
			value={sortBy}
			onChange={(event) => handleSortChange(event.target.value)}
			className="h-min mr-5"
		>
			<option value="relevance">Relevance</option>
			<option value="releaseDate">Release Date</option>
			<option value="rating">Rating</option>
		</select>
	);
};
export default SortOptions;
