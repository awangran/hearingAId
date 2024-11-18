import 'regenerator-runtime/runtime';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, RouterProvider } from 'react-router-dom'
import "./index.css";
import { UserProvider } from '../UserContext';
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <Router>
    <ThemeProvider>
    <UserProvider>
      <App />
    </UserProvider>
    </ThemeProvider>
    </Router>
   
  </React.StrictMode>
);
