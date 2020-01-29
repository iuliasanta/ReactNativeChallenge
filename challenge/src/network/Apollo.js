import {ApolloClient} from 'apollo-client';
import {ApolloLink} from 'apollo-link';
import {createHttpLink} from 'apollo-link-http';
import {onError} from 'apollo-link-error';
import {InMemoryCache, defaultDataIdFromObject} from 'apollo-cache-inmemory';
let httpLink = createHttpLink({
  uri: 'https://api.foodstyles.com/graphql/',
});
const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.map(({message}) =>
      console.log(`[GraphQL error]: Message: ${message}`),
    );
  }
  if (networkError) {
    if (__DEV__) {
      console.error(networkError);
    }
    console.log(`[Network error]: ${networkError}`);
  }
});
exports.client = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache: new InMemoryCache({
    dataIdFromObject: object => {
      return defaultDataIdFromObject(object);
    },
  }),
  defaultOptions: {
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
  },
});
