import useFetch from "../hooks/useFetch";
import { useState } from "react";

const ReviewForm = () => {
	const [movies, moviesLoading, moviesError] = useFetch(
		"https://moviesfunctionapp.azurewebsites.net/api/GetMovies"
	);

	const [selectedMovie, setSelectedMovie] = useState("");

	const [formData, setFormData] = useState({
		title: "",
		text: "",
		rating: 0,
		firstName: "",
		lastName: "",
		email: "",
	});

	const [message, setMessage] = useState(null);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (event) => {
        
		event.preventDefault();

		
		const dataToSubmit = {
			...formData, movie: selectedMovie, 
		};

		try {
			const response = await fetch(
				"https://moviesfunctionapp.azurewebsites.net/api/SubmitReview",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(dataToSubmit),
				}
			);

			if (response.ok) {
				setMessage({
					type: "success",
					text: "Review submitted successfully!",
				});
				// Reset the form after success
				setFormData({
					title: "",
					text: "",
					rating: 0,
					firstName: "",
					lastName: "",
					email: "",
				});
				setSelectedMovie("");
			} else {
				throw new Error(
					"Error submitting the review. Please try again later."
				);
			}
		} catch (error) {
			setMessage({ type: "error", text: error.message });
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Title:
					<input
						type="text"
						name="title"
						placeholder="Enter the title of your review"
						value={formData.title}
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Text:
					<textarea
						name="text"
						placeholder="Write your review here"
						value={formData.text}
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					<MovieOptions
						movies={movies}
						moviesError={moviesError}
						moviesLoading={moviesLoading}
						selectedMovie={selectedMovie}
						setSelectedMovie={setSelectedMovie}
					/>
				</label>
				<label>
					Rating (1 to 5):
					<input
						type="number"
						name="rating"
						min="1"
						max="5"
						value={formData.rating}
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					First Name:
					<input
						type="text"
						name="firstName"
						placeholder="Enter your first name"
						value={formData.firstName}
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Last Name:
					<input
						type="text"
						name="lastName"
						placeholder="Enter your last name"
						value={formData.lastName}
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Email:
					<input
						type="email"
						name="email"
						placeholder="Enter your email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</label>
				<button type="submit">Submit Review</button>
			</form>

			{message && (
				<div>
					{message.text}
				</div>
			)}
		</div>
	);
};

const MovieOptions = ({
	movies,
	moviesError,
	moviesLoading,
	selectedMovie,
	setSelectedMovie,
}) => {
	return (
		<select
			value={selectedMovie}
			onChange={(event) => setSelectedMovie(event.target.value)}
			required
		>
			<option value="" disabled>
				Please select a movie
			</option>
			{moviesLoading && <option value="">Loading...</option>}
			{moviesError && <option value="">Error: {moviesError}</option>}
			{movies &&
				!moviesLoading &&
				movies.map((movie) => (
					<option key={movie.id} value={movie.title}>
						{movie.title}
					</option>
				))}
		</select>
	);
};

export default ReviewForm;
