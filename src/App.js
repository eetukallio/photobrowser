/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';
import NavigationService from './navigation/NavigationService';
import store from './store';
import Navigator from './navigation/Navigator';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </Provider>
  );
};

export default App;
