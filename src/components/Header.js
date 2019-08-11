import React, { Component } from 'react';
import {  
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.text}>WhatsApp</Text>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity>
                        <Image style={styles.img} source={require('../assets/ic_action_search.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.img} source={require('../assets/ic_more_shadow.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height: 53,
        backgroundColor: '#075E54',
        flexDirection: 'row',
    },
    title: {
        flex: 3,
        justifyContent: 'center'
    },
    btn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 17.5,
        marginLeft: 15,
        fontWeight: 'bold'
    },
    img: {
        width: 25,
        height: 25,
        margin: 9
    }
})