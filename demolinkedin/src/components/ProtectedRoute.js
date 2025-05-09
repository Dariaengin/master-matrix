import React from 'react';
import { Navigate } from 'react-router-dom';


function ProtectedRoute({ children }) {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  if (!loggedInUser) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;