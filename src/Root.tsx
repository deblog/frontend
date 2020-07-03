import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import { HashRouter as Router } from 'react-router-dom';
import App from '~/components/App';
// import store from 'store';
// import { LastLocationProvider } from 'react-router-last-location';

class Root extends Component {
  render() {
    return (
      // <Router>
      //   <LastLocationProvider>
      // <Provider store={store}>
      <App />
      //     </Provider>
      //   </LastLocationProvider>
      // </Router>
    );
  }
}
export default Root;
