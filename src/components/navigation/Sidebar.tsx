import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { icons } from "../../assets/icons.js";

const navItems = [
	{ name: "Home", to: "/", icon: icons.home.outline },
	{ name: "About", to: "/about", icon: icons.about.outline },
	{ name: "Experience", to: "/experience", icon: icons.experience.outline },
	{ name: "Projects", to: "/projects", icon: icons.projects.outline },
];

const Sidebar = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [expanded, setExpanded] = useState(true);
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
			className={`fixed flex flex-col justify-center h-screen px-10 ${
				expanded ? "gap-2 w-50" : "gap-4 w-26"
			}`}
		>
			<div
				className="mb-2 text-primary cursor-pointer self-start"
				onClick={() => setExpanded((prev) => !prev)}
			>
				<Icon
					icon={expanded ? icons.left.fill : icons.right.fill}
					height={20}
				/>
			</div>
			{navItems.map(({ name, to, icon }, idx) => (
				<NavLink
					key={name}
					to={to}
					className={({ isActive }) => {
						return `flex items-center gap-2 font-family-body text-lg ${
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
					<Icon icon={icon} height={20} />
					{expanded && name}
				</NavLink>
			))}
		</div>
	);
};

export default Sidebar;
