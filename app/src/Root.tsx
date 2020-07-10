import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '~/components/App';
import { ApolloProvider } from '@apollo/react-hooks';
import client from '~/graphql/apolloClient';
// import store from 'store';
// import { Provider } from 'react-redux';
// import { LastLocationProvider } from 'react-router-last-location';

class Root extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <App />
        </Router>
      </ApolloProvider>
    );
  }
}
export default Root;

{
  /* <Router>
   <LastLocationProvider>
 <Provider store={store}>
  <App />
     </Provider>
   </LastLocationProvider> 
</Router> */
}
