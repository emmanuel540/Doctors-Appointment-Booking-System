import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../../api/AuthService';

const RoleBasedRoutes = ({ component: Component, role }) => {
  const user = AuthService.getCurrentUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return user.role === role ? <Component /> : <Navigate to="/dashboard" />;
};

export default RoleBasedRoutes;
