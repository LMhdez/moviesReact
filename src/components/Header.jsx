
import { NavLink } from "react-router-dom";


const Header = () => {
	return (
		<>
			<header
				className=" bg-slate-900 text-neutral-200 py-8
            "
			>
				<nav className="mx-8 flex align-middle justify-between items-center flex-col md:flex-row">
					<h1 className="font-bold text-xl">
						<NavLink to={"/"}>_underline</NavLink>
					</h1>
					<ul className="flex flex-row items-center justify-center gap-8 text-sm sm:text-base md:text-lg lg:text-xl">
						<li>
							<NavLink to={"/movies"}>Movies</NavLink>
						</li>
						<li>
							<NavLink to={"/wish-list"}>WishList</NavLink>
						</li>
						<li>
							<NavLink to={"/reviews"}>Reviews</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;
