import React from "react";
import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';

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
        width:270,
        height:30,
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
        
    }

})
export default Home1;