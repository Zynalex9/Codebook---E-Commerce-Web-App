import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from "./App.jsx";
import "./index.css";
import { FilterProvider } from "./context/FilterContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <FilterProvider>
        <ToastContainer/>
        <App />
      </FilterProvider>
    </Router>
  </React.StrictMode>
);
