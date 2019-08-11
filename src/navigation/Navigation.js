import React, { Component } from 'react';
import {  
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation';
import Home from '../screens/Home';

const AppStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    }
})

export default createAppContainer(createSwitchNavigator(
    {
        App: AppStack,
    },{
        initialRouteName: 'App'
    }
))