import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", to: "/"},
  { name: "About", to: "/about"},
  { name: "Experience", to: "/experience"},
  { name: "Projects", to: "/projects"},
];

const Sidebar = () => {
	const [active, setActive] = useState("home");

	return (
		<div className="flex flex-col text-center justify-center h-screen gap-4 ml-10">
			{navItems.map(({ name, to }) => (
				<NavLink
					key={name}
					to={to}
					className={({ isActive }) => {
						return `font-family-body text-lg ${isActive ? "text-secondary-accent" : "text-primary"}`;
					}}
					onClick={() => setActive(name)}
				>
					{name}
				</NavLink>
			))}
			
		</div>
	);
};

export default Sidebar;
