import React, { Component } from 'react';
import {  
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native';
const { width, height } = Dimensions.get('screen')

export default class Calls extends  Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
                {
                    name: 'Rizqi',
                    time: 'Yesterday, 7:35 PM',
                    img: 'https://i.imgur.com/YQ2Qpqt.png',
                    callStatus: require('../assets/call_out.png'),
                    type: 'video'
                },
                {
                    name: 'A Fajar',
                    time: 'August 10, 6:40 PM',
                    img: 'https://www.evolutionsociety.org/userdata/news_picupload/pic_sid189-0-norm.jpg',
                    callStatus: require('../assets/call_inc.png'),
                    type: 'call'
                },
                {
                    name: 'Fatur R',
                    time: 'August 3, 9:18 PM',
                    img: 'https://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg',
                    callStatus: require('../assets/call_missed.png'),
                    type: 'call'
                },
                {
                    name: 'Betty',
                    time: 'July 29, 9:00 PM',
                    img: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg',
                    callStatus: require('../assets/call_inc.png'),
                    type: 'video'
                }
            ]
        }
    }
    renderItem = ({item}) => {
        return (
            <View style={{width}}>
                <TouchableOpacity style={styles.callList}>
                    <View style={styles.containImg}>
                        <TouchableOpacity style={styles.btnImg}>
                            <Image source={{uri:item.img}} style={styles.img}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containCall}>
                        <View style={{justifyContent:'space-around'}}>
                            <Text style={{fontSize:17,color:'#000'}}>{item.name}</Text>
                            <View style={{flexDirection:'row'}}>
                                <Image source={item.callStatus} style={styles.callStats}/>
                                <Text style={{color:'#747474'}}>{item.time}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.btnAction}>
                            <Image source={
                                item.type == 'call' ?
                                require('../assets/ic_groupcall_voice.png') :
                                require('../assets/ic_groupcall_video.png')} 
                                style={styles.action}
                            />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        return (
            <View style={{flex:1}}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={this._keyExtractor}
                    renderItem={this.renderItem}
                />
                <TouchableOpacity style={styles.floatBtn}>
                    <Image source={require('../assets/ic_action_new_call.png')} style={styles.compose}/>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    callList: {
        height:77,
        flexDirection:'row',
        paddingRight:11,
        backgroundColor:'#ccc',
        width:'100%'
    },
    containImg: {
        width:'22%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    btnImg: {
        backgroundColor:'#E2E8EA',
        height:'73%',
        width:'65%',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
    },
    img: {
        height:'99%',
        width:'99%',
        borderRadius:50
    },
    containCall: {
        flexDirection:'row',
        width:'81%',
        borderBottomWidth:1,
        borderBottomColor:'#eee',
        paddingRight:10,
        justifyContent:'space-between',
        paddingVertical:10,
        backgroundColor:'#fff'
    },
    callStats: {
        height:10,
        width:10,
        alignSelf:'center',
        marginRight:5
    },
    unread: {
        fontSize:10,
        width:19,
        height:19,
        color:'#fff',
        alignSelf:'flex-end',
        paddingHorizontal:6,
        paddingVertical:1.5,
        borderRadius:10
    },
    btnAction: {
        justifyContent:'center',
        marginRight:7
    },
    action: {
        height:24.5,
        width:24.5,
    },
    floatBtn: {
        width:55,
        height:55,
        position:'absolute',
        bottom:15,
        right:15,
        backgroundColor:'#20C659',
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center',
        elevation:4
    },
    compose: {
        height:25,
        width:25,
        borderRadius:50
    }
})