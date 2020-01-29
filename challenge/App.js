/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import AppNavigation from './src/navigation/AppNavigation';
import ForgotPassScreen from './src/screens/ForgotPassScreen';
import ResetPassScreen from './src/screens/ResetPassScreen';
import {client} from './src/network/Apollo';

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppNavigation />
      </ApolloProvider>
    );
  }
}

export default App;
