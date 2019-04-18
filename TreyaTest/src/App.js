import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducer from './Reducers';
import HomeScreen from './Screens/HomeScreen';
import AppMain from './Navigation/StackNavigation'
export class App extends Component {
  render() {
    const store = createStore(Reducer, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <AppMain/>
      </Provider>
    )
  }
}

export default App
