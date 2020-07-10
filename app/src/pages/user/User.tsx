import React from 'react';
import { Switch, Route, useRouteMatch, RouteProps } from 'react-router-dom';
import { mapper } from '~/lib/mapper';
import { Mypage, Error } from '~/pages';

function User(props: RouteProps) {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}${mapper.pages.mypage.url}`} component={Mypage} />
      <Route component={Error} />
    </Switch>
  );
}

export default User;
