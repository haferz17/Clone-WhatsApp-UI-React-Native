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

export default class Chats extends  Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
                {
                    name: 'Rizqi',
                    recent: 'Hallo',
                    img: 'https://i.imgur.com/YQ2Qpqt.png',
                    msgStatus: require('../assets/msg_status_client_read.png')
                },
                {
                    name: 'A Fajar',
                    recent: 'Bagaimana pekerjaan mu ?',
                    img: 'https://www.evolutionsociety.org/userdata/news_picupload/pic_sid189-0-norm.jpg',
                    msgStatus: null
                },
                {
                    name: 'Fatur R',
                    recent: 'Selamat Malam',
                    img: 'https://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg',
                    msgStatus: require('../assets/msg_status_client_received.png')
                },
                {
                    name: 'Betty',
                    recent: 'Apa kabar ???',
                    img: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg',
                    msgStatus: require('../assets/message_got_receipt_from_server.png')
                },
                {
                    name: 'Rizqi',
                    recent: 'Hallo',
                    img: 'https://i.imgur.com/YQ2Qpqt.png',
                    msgStatus: require('../assets/msg_status_client_read.png')
                },
                {
                    name: 'A Fajar',
                    recent: 'Bagaimana pekerjaan mu ?',
                    img: 'https://www.evolutionsociety.org/userdata/news_picupload/pic_sid189-0-norm.jpg',
                    msgStatus: null
                },
                {
                    name: 'Fatur R',
                    recent: 'Selamat Malam',
                    img: 'https://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg',
                    msgStatus: require('../assets/msg_status_client_received.png')
                },
                {
                    name: 'Betty',
                    recent: 'Apa kabar ???',
                    img: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg',
                    msgStatus: require('../assets/message_got_receipt_from_server.png')
                }
            ]
        }
    }
    renderItem = ({item}) => {
        return (
            <View style={{width}}>
                <TouchableOpacity style={styles.chatList}>
                    <View style={styles.containImg}>
                        <TouchableOpacity style={styles.btnImg}>
                            <Image source={{uri:item.img}} style={styles.img}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containChat}>
                        <View style={{justifyContent:'space-around'}}>
                            <Text style={{fontSize:17,color:'#000'}}>{item.name}</Text>
                            <View style={{flexDirection:'row'}}>
                                {
                                    item.msgStatus !== null ? <Image source={item.msgStatus} style={styles.msgStats}/> : <Image/>
                                }
                                <Text style={{color:'#747474'}}>{item.recent}</Text>
                            </View>
                        </View>
                        <View style={{justifyContent:'space-around'}}>
                            <Text style={{fontSize:11.5,color:item.msgStatus == null ? '#00CD51' : '#747474'}}>7.35 PM</Text>
                            <Text style={[styles.unread,{backgroundColor:item.msgStatus == null ?'#09D261' : '#fff'}]}>5</Text>
                        </View>
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
                    <Image source={require('../assets/ic_action_compose.png')} style={styles.compose}/>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    chatList: {
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
    containChat: {
        flexDirection:'row',
        width:'81%',
        borderBottomWidth:1,
        borderBottomColor:'#eee',
        paddingRight:10,
        justifyContent:'space-between',
        paddingVertical:10,
        backgroundColor:'#fff'
    },
    msgStats: {
        height:15,
        width:17,
        alignSelf:'center',
        marginRight:2
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