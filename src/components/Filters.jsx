const Filters = ({
  genres,
  selectedGenres,
  onGenreChange,
}) => {
  return (
    <>
      <div className="m-8">
        <h4 className="font-black">Category</h4>
        <ul className="mt-2">
          {genres.map((genre, index) => (
            <li key={index} className="">
              <label className="flex justify-between">
                {genre}
					  <input
						  className=""
                  type="checkbox"
                  value={genre}
                  checked={selectedGenres.includes(genre)}
                  onChange={() => onGenreChange(genre)}
                />
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Filters;
