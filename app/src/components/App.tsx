import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Error, Auth, User, SignIn } from '~/pages';
import { mapper } from '~/lib/mapper';
import { PublicRoute, PrivateRoute } from '~/components/base/route';

function App() {
  const isLogged = false;
  console.log(isLogged, 'isLogged');
  return (
    <Switch>
      <PublicRoute exact path={mapper.pages.index.url} component={Home} name="home" />

      <PrivateRoute
        isAuth={isLogged}
        path={mapper.pages.user.url}
        component={User}
        redirect={`/auth${mapper.pages.signIn.url}`}
        name="user,mypage"
      />

      <PublicRoute
        path={mapper.pages.auth.url}
        restricted={isLogged}
        redirect="/"
        component={Auth}
        name="auth, signin, signup"
      />

      <PublicRoute exact path={mapper.pages.about.url} component={About} name="about" />
      <Route component={Error} />
    </Switch>
  );
}

export default App;
