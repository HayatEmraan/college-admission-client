import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./Routes/Routes";
import AuthContext from "./Context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContext>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <RouterProvider router={Routes} />
      </HelmetProvider>
    </QueryClientProvider>
  </AuthContext>
);
