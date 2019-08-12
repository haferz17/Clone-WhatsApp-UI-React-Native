import React, { Component } from 'react';
import {  
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions,
    SectionList
} from 'react-native';
const { width, height } = Dimensions.get('screen')

export default class Status extends  Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
                {title: null, data: [null]},
                {title: 'Recent updates', data: [
                    {name: 'Rizqi',time: '7.35 PM',img: 'https://www.travelseewrite.in/wp-content/uploads/2015/02/traveller.jpg',stats: '#1BBDA4'},
                    {name: 'A Fajar',time: '7.35 PM',img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Ambulance_used_by_Narayana_Health_Group%2C_India.jpg/220px-Ambulance_used_by_Narayana_Health_Group%2C_India.jpg',stats: '#1BBDA4'},
                    {name: 'Rizqi',time: '7.35 PM',img: 'https://www.travelseewrite.in/wp-content/uploads/2015/02/traveller.jpg',stats: '#1BBDA4'},
                    {name: 'A Fajar',time: '7.35 PM',img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Ambulance_used_by_Narayana_Health_Group%2C_India.jpg/220px-Ambulance_used_by_Narayana_Health_Group%2C_India.jpg',stats: '#1BBDA4'},
                ]},
                {title: 'Viewed updates', data: [
                    {name: 'Betty',time: '7.35 PM',img: 'https://3.imimg.com/data3/AQ/SM/MY-8219218/travelling-photography-500x500.jpg',stats: '#bbb'},
                    {name: 'Fatur R',time: '7.35 PM',img: 'https://www.theurbanlist.com/content/article/Foodies_Guide_To_Circular_Quay_3.jpg',stats: '#bbb'}
                ]}
            ],
        }
    }
    renderHeader = ({section: {title}}) => {
        return (
            <View style={[styles.headList,{height:title == null ? 0:35}]}>
                <Text style={{color:'#4e4e4e',marginLeft:13}}>{title}</Text>
            </View>
        )
    }
    renderItem = ({item}) => {
        return (
            <View style={{width}}>
                {
                    item == null ? 
                    (
                    <TouchableOpacity style={styles.chatList}>
                        <View style={styles.containImg}>
                            <TouchableOpacity style={[styles.btnImg,{borderWidth:0}]}>
                                <Image source={{uri:'https://koreaboo-cdn.storage.googleapis.com/2017/08/19055129_1719239944757927_5079907617859554997_o.jpg'}} style={[styles.img,{width:'99%',height:'99%'}]}/>
                                <View style={styles.add}>
                                    <Text style={styles.plus}>+</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containChat}>
                            <Text style={{fontSize:16,color:'#000'}}>My Status</Text>
                            <Text style={{color:'#747474'}}>Tap to add status update</Text>
                        </View>
                    </TouchableOpacity>
                    )
                     :
                    (
                    <TouchableOpacity style={styles.chatList}>
                        <View style={styles.containImg}>
                            <View style={[styles.btnImg,{ borderColor: item.stats}]}>
                                <Image source={{uri:item.img}} style={styles.img}/>
                            </View>
                        </View>
                        <View style={styles.containChat}>
                            <Text style={{fontSize:16,color:'#000'}}>{item.name}</Text>
                            <Text style={{color:'#747474'}}>Yesterday, {item.time}</Text>
                        </View>
                    </TouchableOpacity>
                    )
                }
            </View>
        )
    }
    render() {
        return (
            <View style={{flex:1}}>
                <SectionList
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderHeader}
                    sections={this.state.data}
                    keyExtractor={(item, index) => item + index}
                />
                <TouchableOpacity style={styles.floatBtnType}>
                    <Image source={require('../assets/ic_settings_edit.png')} style={styles.type}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.floatBtnCamera}>
                    <Image source={require('../assets/ic_camera_status_compose.png')} style={styles.camera}/>
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
    headList: {
        width,
        backgroundColor:'#F4F4F4',
        justifyContent:'center',
        fontSize:17
    },
    containImg: {
        width:'22%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    btnImg: {
        borderWidth: 2,
        height:'73%',
        width:'65%',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
    },
    img: {
        height:'95%',
        width:'95%',
        borderRadius:50
    },
    containChat: {
        width:'81%',
        borderBottomWidth:1,
        borderBottomColor:'#eee',
        paddingRight:10,
        justifyContent:'space-around',
        paddingVertical:13,
        backgroundColor:'#fff'
    },
    add: {
        alignSelf:'flex-end',
        width:20,
        height:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'#00CE4B',
        position: 'absolute',
        bottom:0,
        elevation:3
    },
    plus:{
        fontSize:19,
        color:'#fff'
    },
    floatBtnType: {
        width:47,
        height:47,
        position:'absolute',
        bottom:85,
        right:18,
        backgroundColor:'#EEF5F6',
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center',
        elevation:4
    },
    floatBtnCamera: {
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
    type: {
        height:25,
        width:25,
        borderRadius:50
    },
    camera: {
        height:25,
        width:25,
        borderRadius:50
    }
})