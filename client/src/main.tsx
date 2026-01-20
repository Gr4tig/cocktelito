import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Set default theme class to prevent flash
if (!document.documentElement.classList.contains("dark") && !document.documentElement.classList.contains("light")) {
  document.documentElement.classList.add("dark");
}

createRoot(document.getElementById("root")!).render(<App />);
