import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface PublicRouteProps extends RouteProps {
  restricted?: boolean;
  redirect?: string;
  name?: string;
}

const PublicRoute = (props: PublicRouteProps) => {
  const { component: Component, restricted, redirect = '', ...rest } = props;
  console.log('?');
  if (!Component) return null;
  return (
    <Route
      {...rest}
      render={props => (restricted ? <Redirect to={redirect} /> : <Component {...props} />)}
    />
  );
};

export default PublicRoute;
// DEBUG: isLogin쪽 체크해보기
// import {ReactChildren} from '@/types/global.d';
// component:ReactChildren;
// isLogin() && restricted ?
//     <Redirect to="/dashboard" />
// : <Component {...props} />
