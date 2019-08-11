import React, { Component } from 'react';
import {  
    View,
    StatusBar
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import TabNav from '../navigation/TabNav';
import Header from '../components/Header';

const AppIndex = createAppContainer(TabNav)

export default class Home extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar backgroundColor={'#054D44'}/>
                <Header/>
                <AppIndex/> 
            </View>
        )
    }
}