import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BMIContextProvider } from "./context/BMIContext.jsx";
import App from "./App.jsx";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BMIContextProvider>
            <App />
        </BMIContextProvider>
    </StrictMode>
);
