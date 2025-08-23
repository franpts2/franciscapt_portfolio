import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
	return (
		<div className="flex flex-col text-center justify-center h-screen gap-4 ml-10">
			<NavLink to="/" className="font-family-body text-lg">
				Home
			</NavLink>
			<NavLink to="about" className="font-family-body text-lg">
				About
			</NavLink>
			<NavLink to="experience" className="font-family-body text-lg">
				Experience
			</NavLink>
			<NavLink to="projects" className="font-family-body text-lg">
				Projects
			</NavLink>
		</div>
	);
};

export default Sidebar;
