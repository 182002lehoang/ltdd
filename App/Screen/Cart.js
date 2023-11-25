import React from "react";
import { StyleSheet, Text, View, Image, Pressable, TextInput, FlatList, ScrollView } from 'react-native';

const Cart =()=>{
    return(
        <View style={styles.view}>
            <Image source={require('../Img/shop.png')} style={styles.img}></Image>
        </View>
    )
}
const styles=StyleSheet.create({
    img:{
        width:100,
        height:80,
        resizeMode:"contain"
    }
})
export default Cart;