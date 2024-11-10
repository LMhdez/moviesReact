import { useState, useEffect, useRef } from "react";

const ReviewForm = ({ movies, moviesLoading, moviesError }) => {
	const [formData, setFormData] = useState({
		title: "",
		text: "",
		rating: 0,
		firstName: "",
		lastName: "",
		email: "",
		movie: "",
	});

	const [message, setMessage] = useState(null);

	const emailInputRef = useRef(null);
	const titleInputRef = useRef(null);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const regex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

		if (!regex.test(formData.email)) {
			setMessage({
				type: "error",
				text: "Invalid email format. Please enter a valid email.",
			});
			emailInputRef.current.focus();
			return;
		}

		try {
			const response = await fetch(
				"https://moviesfunctionapp.azurewebsites.net/api/SubmitReview",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				}
			);

			if (response.ok) {
				setMessage({
					type: "success",
					text: "Review submitted successfully!",
				});

				setFormData({
					title: "",
					text: "",
					rating: 0,
					firstName: "",
					lastName: "",
					email: "",
					movie: "",
				});
			} else {
				throw new Error(
					"Error submitting the review. Please try again later."
				);
			}
		} catch (error) {
			setMessage({ type: "error", text: error.message });
		}
	};

	useEffect(() => {
		if (message && message.type === "success") {
			const timer = setTimeout(() => {
				setMessage(null);
				titleInputRef.current.focus();
			}, 2500);

			return () => clearTimeout(timer);
		}
	}, [message]);

	return (
		<div className="flex flex-col items-center p-4">
			<div className="w-full max-w-lg">
				<h2 className="text-2xl font-semibold text-center mb-6">
					Submit Review
				</h2>
				<form className="space-y-6" onSubmit={handleSubmit}>
					<div>
						<label className="block text-lg font-semibold">
							Title:
						</label>
						<input
							type="text"
							name="title"
							placeholder="Enter the title of your review"
							value={formData.title}
							onChange={handleChange}
							required
							ref={titleInputRef}
							className="w-full p-3 border border-orange-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500"
						/>
					</div>

					<div>
						<label className="block text-lg font-semibold">
							Text:
						</label>
						<textarea
							name="text"
							placeholder="Write your review here"
							value={formData.text}
							onChange={handleChange}
							required
							className="w-full p-3 border border-orange-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500"
						/>
					</div>

					<div>
						<MovieOptions
							movies={movies}
							moviesError={moviesError}
							moviesLoading={moviesLoading}
							selectedMovie={formData.movie}
							onChangeMovie={handleChange}
						/>
					</div>

					<div>
						<label className="block text-lg font-semibold">
							Rating (1 to 5):
						</label>
						<input
							type="number"
							name="rating"
							min="1"
							max="5"
							value={formData.rating}
							onChange={handleChange}
							required
							className="w-full p-3 border border-orange-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500"
						/>
					</div>

					<div>
						<label className="block text-lg font-semibold">
							First Name:
						</label>
						<input
							type="text"
							name="firstName"
							placeholder="Enter your first name"
							value={formData.firstName}
							onChange={handleChange}
							required
							className="w-full p-3 border border-orange-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500"
						/>
					</div>

					<div>
						<label className="block text-lg font-semibold">
							Last Name:
						</label>
						<input
							type="text"
							name="lastName"
							placeholder="Enter your last name"
							value={formData.lastName}
							onChange={handleChange}
							required
							className="w-full p-3 border border-orange-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500"
						/>
					</div>

					<div>
						<label className="block text-lg font-semibold">
							Email:
						</label>
						<input
							type="email"
							name="email"
							placeholder="Enter your email"
							value={formData.email}
							onChange={handleChange}
							required
							ref={emailInputRef}
							className="w-full p-3 border border-orange-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500"
						/>
					</div>

					<div>
						<button
							type="submit"
							className="w-full p-3 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-500"
						>
							Submit Review
						</button>
					</div>
				</form>

				{message && (
					<div
						className={`mt-6 text-center p-4 rounded-md ${message.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
					>
						{message.text}
					</div>
				)}
			</div>
		</div>
	);
};

const MovieOptions = ({
	movies,
	moviesError,
	moviesLoading,
	selectedMovie,
	onChangeMovie,
}) => {
	return (
		<div>
			<label className="block text-lg font-semibold">Movie:</label>
			<select
				value={selectedMovie}
				name="movie"
				onChange={onChangeMovie}
				required
				className="w-full p-3 border border-orange-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500"
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
		</div>
	);
};

export default ReviewForm;
