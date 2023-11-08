import React from "react";
import { StyleSheet, Text, View, Image, Pressable, TextInput, FlatList } from 'react-native';
import dataao from "../dataao";
const Home1 = ({ navigation }) => {
    return (
        <View style={styles.view}>
            <View style={styles.view1}>
                <Text style={styles.text}>Chào mừng bạn đến với cửa hàng.</Text>
                <Image style={styles.img1} source={require('../Img/profile.png')}></Image>
            </View>
            <View style={styles.view2}>
                <Image style={styles.img2} source={require('../Img/timkiem.png')}></Image>
                <TextInput style={styles.ip} placeholder="Tìm kiếm tại đây">
                </TextInput>
            </View>
            <Text style={styles.text1}>ÁO</Text>
            <Pressable style={styles.pre} >
                <Text style={styles.text2}>tất cả</Text>
                <Text style={styles.text2}>áo thun</Text>
                <Text style={styles.text2}>áo sơ mi</Text>
                <Text style={styles.text2}>áo khoác</Text>
            </Pressable>
            <FlatList 
            numColumns={2}
            data={dataao}
            renderItem={({item})=>(
                <Pressable style={styles.view3}>
                    <Image style={styles.img3} source={item.img}></Image>
                    <Text style={styles.text3}>{item.money}</Text>
                </Pressable>
            )}
            keyExtractor={item=>item.id}
            >
                
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    view1: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        width: 250
    },
    img1: {
        width: 55,
        height: 55
    },
    ip: {
        borderWidth: 1,
        width:700,
        height:40,
        textAlign:'center',
        borderRadius:10

    },
    view2: {
        flexDirection: 'row',
        padding:30,
        alignItems:'center'
    },
    img2:{
        width:20,
        height:20,
        left:30,
        
    },
    text1:{
        fontSize:20,
        fontWeight:'500',
        margin:10,
        bottom:15
    },
    pre:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        bottom:10
        
    },
    text2:{
        fontSize:12,
        borderWidth:1,
        width:70,
        height:25,
        borderRadius:10,
        textAlign:'center',
        fontWeight:'700',
        backgroundColor:'#bed8cf',
        
        
    },
    view3:{
        justifyContent:'center'
    },
    img3:{
        width:200,
        height:150,
        resizeMode:'contain'
    }


})
export default Home1;