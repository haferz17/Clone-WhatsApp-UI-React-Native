import React, { Component } from 'react';
import {  
    View,
    Text,
    Image
} from 'react-native';


export default class Camera extends  Component {
    static navigationOptions = {
        tabBarLabel: () => {},
        tabBarIcon : ({tintColor, focused}) => (
            <Image source={require('../assets/camera-4-32.png')} style={{width:22,height:25}}/>
        )
    }
    render() {
        return (
            <View>
                <Text>Camera</Text>
            </View>
        )
    }
}
