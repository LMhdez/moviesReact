const Filters = ({
	genres,
	selectedGenres,
	onGenreChange,
	genresLoading,
	genresError,
}) => {
	return (
		<>
			<div>
				<h4>Category</h4>
				<ul className="">
					{genres.map((genre, index) => (
						<li key={index}>
							<label>
								<input
									type="checkbox"
									value={genre}
									checked={selectedGenres.includes(genre)}
									onChange={() => onGenreChange(genre)}
								/>
								{genre}
							</label>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Filters;
