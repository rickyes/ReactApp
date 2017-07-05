/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React,{PureComponent} from 'react';
import {
    AppRegistry
} from 'react-native';
import Index from './resource/navigation/index';

export default class ReactApp extends PureComponent{

    render(){
        return (
            <Index />
        );
    }
}

AppRegistry.registerComponent('ReactApp', () => ReactApp);
