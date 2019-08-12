import React, { Component } from 'react';
import { Image } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Camera from '../screens/Camera';
import Chats from '../screens/Chats';
import Status from '../screens/Status';
import Calls from '../screens/Calls';

const TabNav = createMaterialTopTabNavigator(
    {
        Camera: Camera,
        Chats: Chats,
        Status: Status,  
        Calls: Calls
    },
    {
        initialRouteName: 'Calls',
        tabBarOptions: {
            inactiveTintColor: '#bbb',
            showIcon: true, 
            style: {
                backgroundColor: '#075E54',
                height: 50
            },
            labelStyle: {
                fontSize: 15,
                fontWeight: 'bold',
                position: 'absolute'
            },
            indicatorStyle: {
                backgroundColor:'#fff',
                height: 2.5
            }
        }
    }
)

export default TabNav