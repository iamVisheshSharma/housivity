import {View, Text} from 'react-native';
import React from 'react';
import AppNavigator from './src/navigations/AppNavigator';
import {Provider} from 'react-redux';
import { store } from './src/redux/store';
import Profile from './src/crimson-machine-test/Profile';

const App = () => {
  return (
    <Provider store={store}>
      {/* <AppNavigator /> */}
      <Profile />
    </Provider>
  );
};

export default App;
