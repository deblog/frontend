import React from 'react';
import { Switch, Route, useRouteMatch, withRouter, RouteProps } from 'react-router-dom';
import { mapper } from '~/lib/mapper';
import { SignIn, SignUp, Error } from '~/pages';

function Auth(props: RouteProps) {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}${mapper.pages.signIn.url}`} component={SignIn} />
      <Route path={`${path}${mapper.pages.signUp.url}`} component={SignUp} />
      <Route component={Error} />
    </Switch>
  );
}

export default withRouter(Auth);
