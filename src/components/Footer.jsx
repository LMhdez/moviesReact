import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<footer className=" bg-slate-900 text-neutral-200 py-6">
				<nav className="mx-8 flex align-middle justify-between items-center">
					<ul className="flex flex-wrap items-center justify-center text-xs  gap-8 flex-col sm:flex-row ">
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
					
					<NavLink to={"/"} className={"h-fit"}>
					<h1 className="font-bold text-xl">_underline</h1></NavLink>
						
				
				</nav>
				<p className="text-xs m-8">
					2024 Underline, Inc. All Rights Reserved
				</p>
			</footer>
		</>
	);
};

export default Footer;
