import React from "react";
import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';

const Giaodien = () => {
    return (
        <View style={styles.view}>
            <Image style={styles.img} source={require('../Img/giaodien.png')}>

            </Image>
            <Text style={styles.text}>Cửa hàng quần áo.</Text>
            <Text style={styles.text1}>Tận hưởng mua hàng trực tuyến với những trải nghiệm tốt nhất tại cửa hàng.</Text>
            <Pressable style={styles.pre}>
                <TextInput style={styles.ip} placeholder="Get Started"></TextInput>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    img: {
        width: 550,
        height: 400,
        resizeMode: "contain",

    },
    text: {
        fontSize: 35,
        fontWeight: '500',
        bottom: 20,
        margin:10
    },
    text1: {
        fontSize:20,
        width:365,
        margin:10,
        bottom:35,
        textAlign:'center'
        
    },

    pre: {
        justifyContent: 'center',
        alignItems: 'center',
        bottom:20
        
    },
    ip: {
        fontSize: 20,
        borderWidth: 1,
        width: 300,
        height:50,
        textAlign:"center",
        color:"white",
        backgroundColor:"#333333",
        borderRadius:30,
        
    }
})
export default Giaodien;