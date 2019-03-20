import React, {Component} from 'react';
import {createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import App from './App';
import Counter from './src/components/Counter';
import ReduxCounter from './src/components/ReduxCounter';
import Login from './src/components/Login/Login';
import WebSocketDemo from './src/components/WebSocketDemo';


const AppStack = createStackNavigator({

    socket:{
        screen: WebSocketDemo
    },
    app: {
        screen: App
    },
    counter: {
        screen: Counter
    },
    redux:{
        screen: ReduxCounter
    }

});
const LoginStack = createStackNavigator({
    login: {
        screen: Login
    }
});

const MainStack = createSwitchNavigator({
    loginStack: LoginStack,
    appStack: AppStack
})


const AppContainer = createAppContainer(MainStack);


export default class Main extends Component{

    render(){
        return (
            <AppContainer/>
        );
    }
}