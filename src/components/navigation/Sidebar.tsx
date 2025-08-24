import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const navItems = [
	{ name: "Home", to: "/" },
	{ name: "About", to: "/about" },
	{ name: "Experience", to: "/experience" },
	{ name: "Projects", to: "/projects" },
];

const Sidebar = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const sidebarRef = React.useRef<HTMLDivElement>(null);
	const navigate = useNavigate();

    // keyboard shortcuts (ctrl+arrowUp and ctrl+arrowDown to move between pages)
	React.useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.ctrlKey && e.key === "ArrowUp") {
				setActiveIndex((prev) => {
					const newIndex = prev > 0 ? prev - 1 : prev;
					if (navItems[newIndex]) {
						navigate(navItems[newIndex].to);
					}
					return newIndex;
				});
				e.preventDefault();
			}
			if (e.ctrlKey && e.key === "ArrowDown") {
				setActiveIndex((prev) => {
					const newIndex = prev < navItems.length - 1 ? prev + 1 : prev;
					if (navItems[newIndex]) {
						navigate(navItems[newIndex].to);
					}
					return newIndex;
				});
				e.preventDefault();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	return (
		<div
			ref={sidebarRef}
			className="fixed flex flex-col justify-center h-screen gap-4 ml-10"
		>
			{navItems.map(({ name, to }, idx) => (
				<NavLink
					key={name}
					to={to}
					className={({ isActive }) => {
						return `font-family-body text-lg ${
							isActive || activeIndex === idx
								? "text-secondary-accent"
								: "text-primary"
						}`;
					}}
					onClick={() => {
						setActiveIndex(idx);
						navigate(to);
					}}
				>
					{name}
				</NavLink>
			))}
		</div>
	);
};

export default Sidebar;
