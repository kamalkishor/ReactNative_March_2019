/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import store from './src/store/Store';
import {Provider} from 'react-redux';
import Main from './Main';

const applyProvider = ()=> (
    <Provider store={store}>
        <Main/>
    </Provider>
);

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => applyProvider);
