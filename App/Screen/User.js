import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import datamail from "../datamail";
import { useRoute } from "@react-navigation/native";
const Taikhoan = ({ navigation }) => {
    const route = useRoute();
    const user = route.params;

    return (
        <View style={styles.view}>
            <Text style={styles.text1}>Tài Khoản</Text>
            <Image style={styles.img} source={require('../Img/profile.png')}></Image>
            <Text style={styles.text2}>{user.name}</Text>
            <View style={styles.view6}>
                <Pressable onPress={()=>{
                    navigation.navigate('Home1',user)
                }}>
                    <Image source={require('../Img/back.png')} style={styles.img6}></Image>
                </Pressable>
                
            </View>
            <View style={styles.view1}>
                <Image style={styles.img2} source={require('../Img/settings.png')}></Image>
                <Text style={styles.text3}>Cài đặt</Text>
            </View>
            <View style={styles.view1}>
                <Image style={styles.img2} source={require('../Img/privacy.png')}></Image>
                <Text style={styles.text3}>Riêng tư</Text>
            </View>
            <View style={styles.view1}>
                <Image style={styles.img2} source={require('../Img/question.png')}></Image>
                <Text style={styles.text3}>Hỗ trợ</Text>
            </View>
            <Pressable style={styles.pre} onPress={() => {
                navigation.navigate('Login')
            }}>
                <TextInput style={styles.ip} placeholder="Đăng xuất"></TextInput>
            </Pressable>

        </View>
    )
}
const styles = StyleSheet.create({
    view: {
        flex: 1,

    },
    text1: {
        fontSize: 40,
        fontWeight: '500',
        textAlign: 'center',
        padding: 20
    },
    img: {
        width: 150,
        height: 100,
        resizeMode: 'contain',
        left: 120

    },
    text2: {
        fontSize: 30,
        textAlign: 'center'
    },
    view1: {
        flexDirection: 'row',
        margin: 20
    },
    img2: {
        width: 40,
        height: 50,
        resizeMode: 'contain',


    },
    text3: {
        fontSize: 25,
        left: 50,
        top: 10
    },
    pre: {
        alignItems: 'center',
       
        textAlign: 'center'
    },
    ip: {
        borderWidth: 1,
        fontSize: 20,
        width: 250,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#4DD0E1',
        textAlign: 'center',
        top:30
    },
    img6: {
        height: 30,
        width: 50,
        resizeMode: 'contain',
      
        
    },
    view6: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        right:170,
        bottom:180

    }
})


export default Taikhoan;