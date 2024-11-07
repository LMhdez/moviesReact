import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex flex-grow items-center justify-center text-center flex-col gap-3">
				<h2 className="text-2xl font-semibold">Page Not Found</h2>
				<Link
					to="/"
					className=""
				>
				<button className="p-3 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-500">
				
					Back to Home Page
				</button>
				</Link>

			</main>
			<Footer />
		</div>
	);
};

export default PageNotFound;
