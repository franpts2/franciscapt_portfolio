import React from "react";
import ThemeSwitcher from "../components/ThemeSwitcher.js";
import { Outlet } from "react-router-dom";

const HomePage = () => {
	return (
		<>
			<div className="absolute top-4 right-4">
				<ThemeSwitcher />
			</div>

			<div className="flex flex-col items-center justify-center min-h-screen gap-1">
				<h1 className="text-2xl font-family-heading text-primary-accent">
					Francisca Portugal
				</h1>
				<p className="text-base font-family-body text-primary">
					Web developer!
				</p>
			</div>
            
			{/* Render child routes here */}
			<Outlet />
		</>
	);
};

export default HomePage;
