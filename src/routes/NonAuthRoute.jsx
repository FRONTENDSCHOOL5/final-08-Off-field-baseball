import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const NonAuthRoute = ({ authenticated, redirectPath = '/home' }) => {
  if (authenticated) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default NonAuthRoute;
