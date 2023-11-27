import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, Image, style, Pressable } from 'react-native';
import { useRoute } from "@react-navigation/native";
const products = [
    {
        id: 1,
        img: require('../Img/aothun1.png'),
        money: '300',
        mota: 'Áo thun',
        loai: 'Áo thun'

    },
    {
        id: 2,
        img: require('../Img/aothun2.png'),
        money: '300',
        mota: 'Áo thun',
        loai: 'Áo thun'
    },
    {
        id: 3,
        img: require('../Img/aothun3.png'),
        money: '300',
        mota: 'Áo thun',
        loai: 'Áo thun'
    },
    {
        id: 4,
        img: require('../Img/aothun4.png'),
        money: '300',
        mota: 'Áo thun',
        loai: 'Áo thun'
    },
    {
        id: 5,
        img: require('../Img/aosomiden.png'),
        money: '300',
        mota: 'Áo sơ mi',
        loai: 'Áo sơ mi'
    },
    {
        id: 6,
        img: require('../Img/aosomi.png'),
        money: '300',
        mota: 'Áo sơ mi',
        loai: 'Áo sơ mi'
    },
    {
        id: 7,
        img: require('../Img/aosomi1.png'),
        money: '300',
        mota: 'Áo sơ mi',
        loai: 'Áo sơ mi'
    },
    {
        id: 8,
        img: require('../Img/aokhoac.png'),
        money: '300',
        mota: 'Áo khoác',
        loai: 'Áo khoác'
    },
    // {
    //     id: 9,
    //     img: require('../Img/aokhoacden.png'),
    //     money: '300',
    //     mota: 'Áo khoác',
    //     loai: 'Áo khoác'
    // },
    // {
    //     id: 10,
    //     img: require('../Img/quantayda.png'),
    //     money: '300',
    //     mota: 'Quần tây',
    //     loai: 'Quần tây'
    // },
    // {
    //     id: 11,
    //     img: require('../Img/quantayden.png'),
    //     money: '300',
    //     mota: 'Quần tây',
    //     loai: 'Quần tây'
    // },
    // {
    //     id: 12,
    //     img: require('../Img/quantaynau.png'),
    //     money: '300',
    //     mota: 'Quần tây',
    //     loai: 'Quần tây'
    // },
    // {
    //     id: 13,
    //     img: require('../Img/quanjeanden1.png'),
    //     money: '300',
    //     mota: 'Quần jean',
    //     loai: 'Quần jean'
    // },
    // {
    //     id: 14,
    //     img: require('../Img/quanjeanxanh.png'),
    //     money: '300',
    //     mota: 'Quần jean',
    //     loai: 'Quần jean'
    // },
    // {
    //     id: 15,
    //     img: require('../Img/quanthunden.png'),
    //     money: '300',
    //     mota: 'Quần thun',
    //     loai: 'Quần thun'
    // },
    // {
    //     id: 16,
    //     img: require('../Img/quanthunxanh.png'),
    //     money: '300',
    //     mota: 'Quần thun',
    //     loai: 'Quần thun'
    // },
    // {
    //     id: 17,
    //     img: require('../Img/quansortden.png'),
    //     money: '300',
    //     mota: 'Quần sort',
    //     loai: 'Quần sort'
    // },
    // {
    //     id: 18,
    //     img: require('../Img/quansortxanh.png'),
    //     money: '300',
    //     mota: 'Quần sort',
    //     loai: 'Quần sort'
    // },
    // {
    //     id: 19,
    //     img: require('../Img/quansorthong.png'),
    //     money: '300',
    //     mota: 'Quần sort',
    //     loai: 'Quần sort'
    // },
    // {
    //     id: 20,
    //     img: require('../Img/quansortxam.png'),
    //     money: '300',
    //     mota: 'Quần sort',
    //     loai: 'Quần sort'
    // },
];
// const user = route.params;


const GH = ({ navigation }) => {
    const [cart, setCart] = useState([]);
    const route = useRoute();
    const user = route.params;
    const handleAddToCart = (productId) => {
        const product = products.find((product) => product.id === productId);
        const existingCartItem = cart.find((cartItem) => cartItem.id === productId);

        if (existingCartItem) {
            existingCartItem.quantity++;
        } else {
            setCart([...cart, { id: productId, loai: product.loai, money: product.money, quantity: 1 }]);
        }
    };

    const handleRemoveFromCart = (productId) => {
        const updatedCart = cart.filter((cartItem) => cartItem.id !== productId);
        setCart(updatedCart);
    };

    const handleUpdateCartItemQuantity = (productId, quantity) => {
        const updatedCart = cart.map((cartItem) => {
            if (cartItem.id === productId) {
                return { ...cartItem, quantity };
            } else {
                return cartItem;
            }
        });
        setCart(updatedCart);
    };

    const renderCartItem = ({ item }) => (
        <View key={item.id} style={{ flexDirection: 'row', margin: 10, justifyContent: 'space-between' }}>
            {/* <Image source={item.img} style={{width:100,height:100,resizeMode:'contain',backgroundColor:'blue'}}></Image> */}
            <Text>{item.loai}</Text>
            <Text>{item.quantity}</Text>
            <Text>{item.money * item.quantity}</Text>
            {/* <Button title="Remove" onPress={() => handleRemoveFromCart(item.id)} style={{fontSize:10,textAlign:'center'}}/> */}
            <Pressable onPress={() => handleRemoveFromCart(item.id)}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', borderWidth: 1, borderRadius: 10, width: 50, height: 40, backgroundColor: '#4DD0E1', textAlign: 'center', margin: 10, top: -20 }}>Xóa</Text>
            </Pressable>
        </View>
    );

    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', margin: 30 }}>
                <Pressable onPress={() => {
                    navigation.navigate('Home1')
                }}>
                    <Image source={require('../Img/back.png')} style={{ width: 30, height: 20, right: 10 }}></Image>
                </Pressable>
                <Text style={{ textAlign: 'center', fontSize: 50, fontWeight: '600', left: 20 }}>Giỏ Hàng</Text>
            </View>
            <FlatList
                data={products}
                numColumns={4}
                renderItem={({ item }) => (
                    <View style={{ justifyContent: 'space-between', alignItems: 'center', margin: 10 }}>
                        <Image source={item.img} style={{ width: 50, height: 50 }}></Image>
                        <Text>{item.loai}</Text>
                        <Text>Giá: ${item.money}</Text>
                        <Pressable onPress={() => handleAddToCart(item.id)} style={{ borderWidth: 1, borderRadius: 10, backgroundColor: 'pink', margin: 10, width: 50, height: 40 }} >
                            <Text style={{ textAlign: 'center', padding: 10, fontSize: 13, fontWeight: '600', textAlign: 'center' }}>ADD</Text>
                        </Pressable>
                    </View>
                )}
            />
            <View style={{ flexDirection: 'row', textAlign: 'center', position: '' }}>
                <Text style={{ fontSize: 25, left: 20 }}>Tên</Text>
                <Text style={{ fontSize: 25, left: 78 }}>SL</Text>
                <Text style={{ fontSize: 25, left: 115 }}>Giá</Text>
            </View>
            {cart.length > 0 && (

                <View style={{ flexDirection: 'row', textAlign: 'center' }}>
                    {/* <Text style={{ fontSize: 20, margin: 10 }}>Cart</Text> */}
                    <FlatList style={{ textAlign: 'center', top: 30 }}
                        data={cart}

                        renderItem={renderCartItem}

                    />
                    {/* <Button title="Update Quantity" onPress={() => handleUpdateCartItemQuantity()} /> */}
                    <Pressable Pressable onPress={() => handleUpdateCartItemQuantity()}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', borderWidth: 1, borderRadius: 10, width: 50, height: 40, backgroundColor: '#4DD0E1', top: 28, textAlign: 'center' }}>Cập nhật</Text>
                    </Pressable>
                </View>
            )
            }

        </View >
    );
};

export default GH;