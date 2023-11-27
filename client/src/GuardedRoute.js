import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GuardedRoute = ({ component: Component, roles, ...rest }) => {
  const userRole = useSelector((state) => state.auth.userRole);
  const isAuthorized = roles.includes(userRole);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthorized ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default GuardedRoute;
