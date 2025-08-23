import React from "react";
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

import HomePage from "../pages/HomePage.js";
import AboutPage from "../pages/AboutPage.js";
import ExperiencePage from "../pages/ExperiencePage.js";
import ProjectsPage from "../pages/ProjectsPage.js";
import Layout from "../layouts/Layout.js";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<HomePage />} />
			<Route path="about" element={<AboutPage />} />
			<Route path="experience" element={<ExperiencePage />} />
			<Route path="projects" element={<ProjectsPage />} />
		</Route>
	)
);
