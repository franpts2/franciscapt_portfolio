import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
	const [active, setActive] = useState("home");

	return (
		<div className="flex flex-col text-center justify-center h-screen gap-4 ml-10">
			<NavLink
				to="/"
				className={({ isActive }) => {
					return `font-family-body text-lg ${isActive ? "text-secondary-accent" : "text-primary"}`;
				}}
				onClick={() => setActive("home")}
			>
				Home
			</NavLink>
			<NavLink
				to="about"
				className={({ isActive }) => {
					return `font-family-body text-lg ${isActive ? "text-secondary-accent" : "text-primary"}`;
				}}
				onClick={() => setActive("about")}
			>
				About
			</NavLink>
			<NavLink
				to="experience"
				className={({ isActive }) => {
					return `font-family-body text-lg ${isActive ? "text-secondary-accent" : "text-primary"}`;
				}}
				onClick={() => setActive("experience")}
			>
				Experience
			</NavLink>
			<NavLink
				to="projects"
				className={({ isActive }) => {
					return `font-family-body text-lg ${isActive ? "text-secondary-accent" : "text-primary"}`;
				}}
				onClick={() => setActive("projects")}
			>
				Projects
			</NavLink>
		</div>
	);
};

export default Sidebar;
