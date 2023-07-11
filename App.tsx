import React from 'react';
import {StatusBar} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import {createStore} from 'redux';
import {rootReducer} from './src/redux/reducers';
import {Provider} from 'react-redux';

function App() {
  const store = createStore(rootReducer);
  return <Provider store={store}>
      <RootNavigator />
      <StatusBar />
  </Provider>
}

export default App;
