import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./contexts/LightContext";
import { LanguageProvider } from "./contexts/LanguageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <LanguageProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </LanguageProvider>
  </ThemeProvider>
);
