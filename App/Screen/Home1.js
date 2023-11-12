import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, TextInput, FlatList, SectionList } from 'react-native';
import dataao from "../dataao";
import { useRoute } from "@react-navigation/native";
const Home1 = ({navigation}) => {
    const route = useRoute();
    const user = route.params;
    const [ao, setAo] = useState(dataao);
    return (
        <View style={styles.view}>
            <View style={styles.view1}>
                <Text style={styles.text}>Chào mừng bạn đến với cửa hàng.</Text>
                <Pressable>
                    <Image style={styles.img1} source={require('../Img/profile.png')}></Image>
                    <Text style={styles.text4}>{user.name1}</Text>
                </Pressable>
            </View>
            <View style={styles.view2}>
                <Image style={styles.img2} source={require('../Img/timkiem.png')}></Image>
                <TextInput style={styles.ip} placeholder="Tìm kiếm tại đây">
                </TextInput>
            </View>
            <Text style={styles.text1}>ÁO</Text>
            <View style={styles.pre} >
                <Pressable onPress={() => {
                    setAo(dataao)
                }}>
                    <Text style={styles.text2}>tất cả</Text>
                </Pressable>
                <Pressable onPress={() => {
                    const ao = dataao.filter((user) => {
                        return user.mota == 'ao thun'
                    })
                    setAo(ao)
                }}>
                    <Text style={styles.text2}>áo thun</Text>
                </Pressable>

                <Pressable onPress={() => {
                    const ao = dataao.filter((user) => {
                        return user.mota == 'ao so mi'
                    })
                    setAo(ao)
                }}>
                     <Text style={styles.text2}>áo sơ mi</Text>
                </Pressable>
                <Pressable onPress={() => {
                    const ao = dataao.filter((user) => {
                        return user.mota == 'ao khoac'
                    })
                    setAo(ao)
                }}>
                    <Text style={styles.text2}>áo khoác</Text>
                </Pressable>
               
                
            </View>
            
            <FlatList
                numColumns={2}
                data={ao}
                renderItem={({ item }) => (
                    <Pressable style={styles.view3} onPress={()=>{
                        navigation.navigate('Home2',item)
                    }}>
                        <Image style={styles.img3} source={item.img}></Image>
                        <Text style={styles.text3}>{item.money}</Text>
                       
                    </Pressable>
                    
                )}
                keyExtractor={item => item.id}
            >
                 
            </FlatList>
            <Text style={styles.text1}>ÁO</Text>
            <View style={styles.pre} >
                <Pressable onPress={() => {
                    setAo(dataao)
                }}>
                    <Text style={styles.text2}>tất cả</Text>
                </Pressable>
                <Pressable onPress={() => {
                    const ao = dataao.filter((user) => {
                        return user.mota == 'ao thun'
                    })
                    setAo(ao)
                }}>
                    <Text style={styles.text2}>áo thun</Text>
                </Pressable>

                <Pressable onPress={() => {
                    const ao = dataao.filter((user) => {
                        return user.mota == 'ao so mi'
                    })
                    setAo(ao)
                }}>
                     <Text style={styles.text2}>áo sơ mi</Text>
                </Pressable>
                <Pressable onPress={() => {
                    const ao = dataao.filter((user) => {
                        return user.mota == 'ao khoac'
                    })
                    setAo(ao)
                }}>
                    <Text style={styles.text2}>áo khoác</Text>
                </Pressable>
               
                
            </View>
            <FlatList
                numColumns={2}
                data={ao}
                renderItem={({ item }) => (
                    <Pressable style={styles.view3} onPress={()=>{
                        navigation.navigate('Home2',item)
                    }}>
                        <Image style={styles.img3} source={item.img}></Image>
                        <Text style={styles.text3}>{item.money}</Text>
                       
                    </Pressable>
                    
                )}
                keyExtractor={item => item.id}
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
        width: 50,
        height: 50
    },
    ip: {
        borderWidth: 1,
        width: 700,
        height: 40,
        textAlign: 'center',
        borderRadius: 10

    },
    view2: {
        flexDirection: 'row',
        padding: 30,
        alignItems: 'center'
    },
    img2: {
        width: 20,
        height: 20,
        left: 30,

    },
    text1: {
        fontSize: 20,
        fontWeight: '500',
        margin: 10,
        bottom: 15
    },
    pre: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        bottom: 10

    },
    text2: {
        fontSize: 12,
        borderWidth: 1,
        width: 70,
        height: 25,
        borderRadius: 10,
        textAlign: 'center',
        fontWeight: '700',
        backgroundColor: '#bed8cf',


    },
    view3: {
        justifyContent: 'center'
    },
    img3: {
        width: 200,
        height: 150,
        resizeMode: 'contain'
    },
    text4: {
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'center'

    }


})
export default Home1;