import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import dataao from "../dataao";

const Home2 = ({ navigation }) => {
    const route = useRoute();
    const user = route.params;
    const [count,setCount] = useState([1]);
    useEffect(() => {
        if (route.params?.selecitem) {

        }
    }, [route.params?.selecitem]);

   

    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Image style={styles.img} source={user.img}></Image>
            </View>

            <View style={styles.view1}>
                <Text style={styles.text}>{user.mota}</Text>
                <Text style={styles.text2}>{user.money}</Text>


            </View>
           
            <View style={styles.view2}>
                <Pressable  onPress={()=>{
                    navigation.navigate('Home1',user)
                }}>
                    <View style={styles.view3}>
                        <Text style={styles.text5} >Add to cart</Text>
                    </View>
                    
                </Pressable>
            </View>
          
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    view: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        borderRadius: 20,
        width: 360,
        height: 388,
        margin: 14
    },
    img: {
        width: 280,
        height: 340,
        resizeMode: 'contain'
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10
    },
    view1: {
        flexDirection: 'row',
        justifyContent:'space-around'
    },

    text2: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
     

    },


    view2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 80
    },
    img1: {
        width: 29,
        height: 26,
    },
    view3: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 269,
        height: 54,
        backgroundColor: 'red',
        borderRadius: 20
    },
    text5: {
        fontSize: 25,
        fontWeight: '400',
        color: 'white'
    }
})


export default Home2;