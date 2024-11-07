import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import MoviesScreen from "./screens/MoviesScreen";
import ReviewScreen from "./screens/ReviewScreen";
import WishListScreen from "./screens/WishListScreen";
import PageNotFound from "./screens/PageNotFound";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomeScreen />} />
					<Route path="/movies" element={<MoviesScreen />} />
					<Route path="/movies/:id" element={<DetailsScreen />} />
					<Route path="/reviews" element={<ReviewScreen />} />
					<Route path="/wish-list" element={<WishListScreen />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
