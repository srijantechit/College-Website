// components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = (Component) => {
  const isAuthenticated = () => {
    // Implement your authentication check logic here, e.g., checking for a token in local storage
    return !!localStorage.getItem('authToken');
  };

  return isAuthenticated() ? <Component /> : <Navigate to="/admin" />;
};

export default PrivateRoute;
