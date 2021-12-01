import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../auth/authContext';

export const PrivateRoute = ({ children }) => {

  const { user } = useContext(AuthContext);

  // const location = useLocation();
  const { pathname, search } = useLocation();
  //console.log(location);

  // localStorage.setItem('lastPath', location.pathname);
  localStorage.setItem('lastPath', pathname + search);
  
  return user.logged
    ? children
    : <Navigate  to="/login" />
}
