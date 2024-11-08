import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-slate-900 text-neutral-200 py-6">
			<nav className="mx-8 flex align-middle justify-between items-center">
				<ul className="flex flex-wrap items-center justify-center text-xs gap-8 flex-col sm:flex-row">
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
				
				<NavLink
					to="/"
					className={({ isActive }) =>
						`relative ${isActive ? "after:w-full" : "after:w-0"}
						after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-white
						after:transition-width after:duration-300 after:ease-in-out
						hover:after:w-full h-fit`
					}
				>
					<h1 className="font-bold text-xl">_underline</h1>
				</NavLink>
			</nav>
			<p className="text-xs m-8">2024 Underline, Inc. All Rights Reserved</p>
		</footer>
	);
};

export default Footer;
