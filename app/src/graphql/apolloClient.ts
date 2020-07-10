import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { API_ADDRESS } from '~/lib/config';

// import { createHttpLink } from 'apollo-link-http';
// 'https://countries.trevorblades.com'
const client = new ApolloClient({
  uri: API_ADDRESS,
  cache: new InMemoryCache(),
});
export default client;
