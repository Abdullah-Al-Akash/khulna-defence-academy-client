import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  // Log the current loading and user status
  console.log(loading);
  console.log(user);

  if (loading) {
    // Optionally, you can return a spinner or loading component
    return <div>Loading...</div>;
  }

  if (user?.email) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute
