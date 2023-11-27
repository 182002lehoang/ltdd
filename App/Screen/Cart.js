import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, TextInput, FlatList, ScrollView } from 'react-native';
import { useRoute } from "@react-navigation/native";
import dataao from "../dataao";

const Cart = ({ cart }) => {
    const route = useRoute();
    const user = route.params;
    //const [cart, setCart] = useState([]);
    useEffect(() => {
        if (route.params?.selecitem) {

        }
    }, [route.params?.selecitem]);

    return (
        // <View style={styles.view}>
        //     <Text>Giỏ hàng</Text>
        //     {cart?.map((item) => (
        //         <View key={item.id}>
        //             {/* <Image source={item.img} /> */}
        //             {/* <Text>{item.mota}</Text> */}
        //             <Text style={styles.text}>{item.money}</Text>
        //             <Text>{item.quantity}</Text>
        //         </View>
        //     ))}
        //     <Pressable onPress={() => {
        //         navigation.navigate('Home1')
        //     }}>
        //         <Image source={require('../Img/back.png')} style={styles.img2}></Image>
        //     </Pressable>
        // </View>
        <View>
            {cart.map((dataao) => (
                <Text>{item.money}</Text>
            ))}
        </View>
    )
}
const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 80,
        resizeMode: "contain"
    },
    img2: {
        width: 50,
        height: 50
    },
    text: {
        fontSize: 50
    }
})
export default Cart;