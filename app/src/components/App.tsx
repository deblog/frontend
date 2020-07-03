import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Error, SignIn, SignUp } from '~/pages';
import { mapper } from '~/lib/mapper';

function App() {
  return (
    <Switch>
      <Route exact path={mapper.pages.index.url} component={Home} />
      <Route exact path={mapper.pages.about.url} component={About} />
      <Route exact path={mapper.pages.signIn.url} component={SignIn} />
      <Route exact path={mapper.pages.signUp.url} component={SignUp} />
      <Route component={Error} />
    </Switch>
  );
}

export default App;
