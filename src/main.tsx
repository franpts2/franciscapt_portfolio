import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import App from "./App.js";
import ThemeProvider from "./components/ThemeProvider.js";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement!).render(
	<StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</StrictMode>
);
