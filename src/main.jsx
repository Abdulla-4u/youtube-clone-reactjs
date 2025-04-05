import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AppContextProvider } from "./Context/AppContext.jsx";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Router>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </Router>
    </React.StrictMode>
  );
}
