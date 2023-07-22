import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./Routes/Routes";
import AuthContext from "./Context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContext>
    <HelmetProvider>
      <RouterProvider router={Routes} />
    </HelmetProvider>
  </AuthContext>
);
