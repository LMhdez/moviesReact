import { useState, useEffect, useRef } from "react";
import { submitReview } from "../services/movieApi";

const ReviewForm = ({ movies, moviesLoading, moviesError }) => {
  const [formData, setFormData] = useState({
    title: "", text: "", rating: 0, firstName: "", lastName: "", movie: "",
  });
  const [message, setMessage] = useState(null);
  const titleInputRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!submitReview(formData)) {
      setMessage({ type: "error", text: "Unable to save this review in the current browser." });
      return;
    }
    setMessage({ type: "success", text: "Review saved in this browser." });
    setFormData({ title: "", text: "", rating: 0, firstName: "", lastName: "", movie: "" });
  };

  useEffect(() => {
    if (message?.type === "success") {
      const timer = setTimeout(() => {
        setMessage(null);
        titleInputRef.current?.focus();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Submit Review</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg font-semibold">
              Title:
              <input type="text" name="title" placeholder="Enter the title of your review"
                value={formData.title} onChange={handleChange} required ref={titleInputRef}
                className="w-full p-3 border border-orange-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500" />
            </label>
          </div>
          <div>
            <label className="block text-lg font-semibold">
              Text:
              <textarea name="text" placeholder="Write your review here" value={formData.text}
                onChange={handleChange} required
                className="w-full p-3 border border-orange-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500" />
            </label>
          </div>
          <div>
            <MovieOptions movies={movies} moviesError={moviesError} moviesLoading={moviesLoading}
              selectedMovie={formData.movie} onChangeMovie={handleChange} />
          </div>
          <div>
            <label className="block text-lg font-semibold">
              Rating (1 to 5):
              <input type="number" name="rating" min="1" max="5" value={formData.rating}
                onChange={handleChange} required
                className="w-full p-3 border border-orange-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500" />
            </label>
          </div>
          <div>
            <label className="block text-lg font-semibold">
              First Name:
              <input type="text" name="firstName" placeholder="Enter your first name"
                value={formData.firstName} onChange={handleChange} required
                className="w-full p-3 border border-orange-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500" />
            </label>
          </div>
          <div>
            <label className="block text-lg font-semibold">
              Last Name:
              <input type="text" name="lastName" placeholder="Enter your last name"
                value={formData.lastName} onChange={handleChange} required
                className="w-full p-3 border border-orange-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500" />
            </label>
          </div>
          <div>
            <button type="submit" className="w-full p-3 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-500">
              Submit Review
            </button>
          </div>
        </form>
        {message && (
          <div className={`mt-6 text-center p-4 rounded-md ${message.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
};

const MovieOptions = ({ movies, moviesError, moviesLoading, selectedMovie, onChangeMovie }) => (
  <div>
    <label className="block text-lg font-semibold">
      Movie:
      <select value={selectedMovie} name="movie" onChange={onChangeMovie} required
        className="w-full p-3 border border-orange-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500">
        <option value="" disabled>Please select a movie</option>
        {moviesLoading && <option value="">Loading...</option>}
        {moviesError && <option value="">Error: {moviesError}</option>}
        {movies?.map((movie) => <option key={movie.id} value={movie.title}>{movie.title}</option>)}
      </select>
    </label>
  </div>
);

export default ReviewForm;
