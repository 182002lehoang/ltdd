import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, TextInput, FlatList } from 'react-native';
import dataao from "../dataao";
import { useRoute } from "@react-navigation/native";

const Home1 = ({ navigation }) => {
    const route = useRoute();
    const user = route.params;
    const [ao, setAo] = useState(dataao);
  //  const [count, setCount] = useState();
    return (
        <View style={styles.view}>
            <View style={styles.view1}>
                <Text style={styles.text}>Chào mừng bạn đến với cửa hàng.</Text>
                <Pressable onPress={()=>{
                    navigation.navigate('Taikhoan',user)
                }}>
                    <Image style={styles.img1} source={require('../Img/profile.png')}></Image>
                    <Text style={styles.text4}>{user.name}</Text>
                </Pressable>
            </View>
            <View style={styles.view2}>
                <Image style={styles.img2} source={require('../Img/timkiem.png')}></Image>
                <TextInput style={styles.ip} placeholder="Tìm kiếm tại đây">
                </TextInput>
            </View>
            <Text style={styles.text1}>ÁO QUẦN</Text>
            <View style={styles.pre} >
                <Pressable onPress={() => {
                    setAo(dataao)
                }}>
                    <Text style={styles.text2}>tất cả</Text>
                </Pressable>
                <Pressable onPress={() => {
                    const ao = dataao.filter((user) => {
                        return user.mota == 'Áo thun'
                    })
                    setAo(ao)
                }}>
                    <Text style={styles.text2}>áo thun</Text>
                </Pressable>

                <Pressable onPress={() => {
                    const ao = dataao.filter((user) => {
                        return user.mota == 'Áo sơ mi'
                    })
                    setAo(ao)
                }}>
                    <Text style={styles.text2}>áo sơ mi</Text>
                </Pressable>
                <Pressable onPress={() => {
                    const ao = dataao.filter((user) => {
                        return user.mota == 'Áo khoác'
                    })
                    setAo(ao)
                }}>
                    <Text style={styles.text2}>áo khoác</Text>
                </Pressable>


            </View>
            <View style={styles.pre1} >
                <Pressable onPress={() => {
                    const ao = dataao.filter((user) => {
                        return user.mota == 'Quần sort'
                    })
                    setAo(ao)
                }}>
                    <Text style={styles.text2}>quần sort</Text>
                </Pressable>
                <Pressable onPress={() => {
                    const ao = dataao.filter((user) => {
                        return user.mota == 'Quần tây'
                    })
                    setAo(ao)
                }}>
                    <Text style={styles.text2}>quần tây</Text>
                </Pressable>

                <Pressable onPress={() => {
                    const ao = dataao.filter((user) => {
                        return user.mota == 'Quần jean'
                    })
                    setAo(ao)
                }}>
                    <Text style={styles.text2}>quần jean</Text>
                </Pressable>
                <Pressable onPress={() => {
                    const ao = dataao.filter((user) => {
                        return user.mota == 'Quần thun'
                    })
                    setAo(ao)
                }}>
                    <Text style={styles.text2}>quần thun</Text>
                </Pressable>


            </View>

            <FlatList
                numColumns={2}
                data={ao}
                renderItem={({ item }) => (
                    <Pressable style={styles.view3} onPress={() => {
                        navigation.navigate('Home2', item)
                    }}>
                        <Image style={styles.img3} source={item.img}></Image>
                        <Text style={styles.text5}>{item.mota}</Text>
                        <View style={styles.view4}>
                            <Text style={styles.text3}>{item.money}</Text>
                            <Image style={styles.img4} source={require('../Img/add.png')} ></Image>
                        </View>
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
        bottom: 10,
        margin: 10

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

    },
    pre1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        bottom: 10,
        margin: 10
    },
    view4: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text3: {
        fontSize: 20,
        justifyContent: 'center',
        textAlign: 'center',
        left: -12
    },
    img4: {
        height: 20,
        width: 20
    },
    text5: {
        fontSize: 20,
        fontWeight: '500',
        left: 20
    }

})
export default Home1;