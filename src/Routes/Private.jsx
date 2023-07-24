import React, { useContext } from "react";
import { LayerContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
  const { user, loading } = useContext(LayerContext);
  if (loading) {
    return;
  }
  const location = useLocation();
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default Private;
