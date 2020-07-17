import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '~/components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '~/store/modules';
// import store from '~/store';
// import { ApolloProvider } from '@apollo/react-hooks';
// import client from '~/graphql/apolloClient';
// import { LastLocationProvider } from 'react-router-last-location';

const store = createStore(rootReducer);

class Root extends Component {
  render() {
    return (
      // <ApolloProvider client={client}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
      // </ApolloProvider>
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
