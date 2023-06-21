import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute = ({ authenticated, redirectPath = '/' }) => {
  if (!authenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default AuthRoute;
