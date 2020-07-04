import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  isAuth?: boolean;
  redirect?: string;
  name?: string;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, isAuth, redirect = '', ...rest } = props;
  if (!Component) return null;
  return (
    <Route
      {...rest}
      render={props => (!isAuth ? <Redirect to={redirect} /> : <Component {...props} />)}
    />
  );
};
export default PrivateRoute;
