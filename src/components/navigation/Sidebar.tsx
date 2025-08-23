import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
	const [active, setActive] = useState("Home");

	return (
		<div className="flex flex-col text-center justify-center h-screen gap-4 ml-10">
			<NavLink
				to="/"
				className={({ isActive }) => {
					return `font-family-body text-lg ${isActive ? "text-amber-600" : ""}`;
				}}
				onClick={() => setActive("home")}
			>
				<p>Home</p>
			</NavLink>
			<NavLink
				to="about"
				className={({ isActive }) => {
					return `font-family-body text-lg ${isActive ? "text-amber-600" : ""}`;
				}}
				onClick={() => setActive("about")}
			>
				About
			</NavLink>
			<NavLink
				to="experience"
				className={({ isActive }) => {
					return `font-family-body text-lg ${isActive ? "text-amber-600" : ""}`;
				}}
				onClick={() => setActive("experience")}
			>
				Experience
			</NavLink>
			<NavLink
				to="projects"
				className={({ isActive }) => {
					return `font-family-body text-lg ${isActive ? "text-amber-600" : ""}`;
				}}
				onClick={() => setActive("projects")}
			>
				Projects
			</NavLink>
		</div>
	);
};

export default Sidebar;
