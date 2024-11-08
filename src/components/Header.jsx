import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className="bg-slate-900 text-neutral-200 py-8">
			<nav className="mx-8 flex align-middle justify-between items-center flex-col md:flex-row">
				<h1 className="font-bold text-xl">
					<NavLink
						to="/"
						className={({ isActive }) =>
							`relative ${isActive ? "after:w-full" : "after:w-0"}
							after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-white
							after:transition-width after:duration-300 after:ease-in-out
							hover:after:w-full`
						}
					>
						_underline
					</NavLink>
				</h1>
				<ul className="flex flex-row items-center justify-center gap-8 text-sm sm:text-base md:text-lg lg:text-xl">
					<li>
						<NavLink
							to="/movies"
							className={({ isActive }) =>
								`relative ${isActive ? "after:w-full" : "after:w-0"}
								after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-white
								after:transition-width after:duration-300 after:ease-in-out
								hover:after:w-full`
							}
						>
							Movies
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/wish-list"
							className={({ isActive }) =>
								`relative ${isActive ? "after:w-full" : "after:w-0"}
								after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-white
								after:transition-width after:duration-300 after:ease-in-out
								hover:after:w-full`
							}
						>
							WishList
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/reviews"
							className={({ isActive }) =>
								`relative ${isActive ? "after:w-full" : "after:w-0"}
								after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-white
								after:transition-width after:duration-300 after:ease-in-out
								hover:after:w-full`
							}
						>
							Reviews
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
