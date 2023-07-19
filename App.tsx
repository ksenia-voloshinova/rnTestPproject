import React from 'react';
import {StatusBar} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import {Provider} from 'react-redux';
import store from './src/redux/store';

function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
      <StatusBar />
    </Provider>
  );
}

export default App;
