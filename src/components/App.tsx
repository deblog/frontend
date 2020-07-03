import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Error, SignIn } from '~/pages';
import { mapper } from '~/lib/mapper';

function App() {
  return (
    <Switch>
      <Route exact path={mapper.pages.index.url} component={Home} />
      <Route exact path={mapper.pages.about.url} component={About} />
      <Route exact path={mapper.pages.signIn.url} component={SignIn} />
      <Route component={Error} />
    </Switch>
  );
}

export default App;
