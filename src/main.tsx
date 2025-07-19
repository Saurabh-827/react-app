import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";

// Using non-null assertion
// createRoot(document.getElementById('root')!).render(...)

// Using type assertion
// createRoot(document.getElementById('root') as HTMLElement).render(...)
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
