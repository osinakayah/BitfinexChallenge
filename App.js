import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux'
import createStore from './App/Redux'
import RootContainer from './App/Containers/RootContainer'
import { AppLoading } from 'expo';

import * as Font from 'expo-font';
// import { Ionicons } from '@expo/vector-icons';

// create our store
const store = createStore()


export default  class App extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
        };
    }
    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({ isReady: true });
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading />;
        }
        return (
            <Provider store={store}>
                <RootContainer/>
            </Provider>
        );
    }
}


