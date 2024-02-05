import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Because this its rendering 2 times
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
