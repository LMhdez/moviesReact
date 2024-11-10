import { Link } from "react-router-dom";

const HeroBanner = ({ headline }) => {
	return (
		<>
			<div
				style={{ backgroundImage: `url(${headline.image})` }}
				className="bg-cover bg-center bg-no-repeat aspect-video text-slate-200 flex items-center justify-center"
			>
				<div className="flex flex-col gap-3 px-4 py-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 bg-black bg-opacity-60  rounded-lg">
					<h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center">
						{headline.title}
					</h2>
					<p className="text-sm sm:text-base md:text-lg lg:text-xl text-center">
						{headline.description}
					</p>
					<Link
							to={`movies/${headline.id}`}
							className="text-white font-semibold self-center"
						>
					<button className="bg-orange-400 p-2 rounded hover:bg-orange-500 transition w-full md:w-auto ">
						
							View Details
					</button>
					</Link>

				</div>
			</div>
		</>
	);
};

export default HeroBanner;
