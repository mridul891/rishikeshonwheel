import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App classname="bg-[#Fbfcf8] h-[100vh] w-[100vw]" />
    </BrowserRouter>
  </React.StrictMode>
);
