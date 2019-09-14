import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux'
import createStore from './App/Redux'
import RootContainer from './App/Containers/RootContainer'

// create our store
const store = createStore()



export default function App() {
  return (
    <Provider store={store}>
      <RootContainer/>
    </Provider>
  );
}


