import React, { useContext } from "react";
import { LayerContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
  const { user, loading } = useContext(LayerContext);
  const location = useLocation();
  if (loading) {
    return;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default Private;
