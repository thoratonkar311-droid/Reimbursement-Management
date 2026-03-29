import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Optional: Global styles (if you add later)
// import "./index.css";

// Root element
const container = document.getElementById("root");

// Safety check (prevents crash if root missing)
if (!container) {
  throw new Error("Root element not found. Check index.html");
}

// Create React root
const root = ReactDOM.createRoot(container);

// Render App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
