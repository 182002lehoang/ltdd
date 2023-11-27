import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState ,useEffect} from "react";
import { StyleSheet, Text, View, Image, Pressable, TextInput, TouchableOpacity } from 'react-native';
//import datamail from "../datamail";
import dataao from "../dataao";
var url = "https://65561aa484b36e3a431f0c8a.mockapi.io/user";

const Login = () => {
    const navigation = useNavigation();
    // const [check, setCheck] = useState([]);
    const route = useRoute();
    const [name, setName] = useState();
    const [pas, setPas] = useState();
    const [bas, setBas] = useState(true);
    const [state, setState] = useState([]);

    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setState(data);
            console.log("====================================");
            console.log(data);
            console.log("====================================");
          });
      }, [state]);

    

    const handleCheck = () => {
        const user = state.find((user) => user.email == name && user.pass == pas);
        if (user) {
            navigation.navigate('Home1', user);
        } else {
            alert('sai tài khoản mật khẩu');
        }
    };



    return (
        <View style={styles.view}>
            <Image style={styles.img} source={require('../Img/font.png')}></Image>
            <Text style={styles.text}> Đăng nhập</Text>
            <View style={styles.view1}>
                <TextInput style={styles.ip} placeholder="User" value={name} onChangeText={(text) => setName(text)}>

                </TextInput>
                <Image style={styles.img1} source={require('../Img/user.png')}></Image>
            </View>
            <View style={styles.view1}>
                <TextInput style={styles.ip1} placeholder="Password" value={pas} onChangeText={(text) => setPas(text)} secureTextEntry={bas}>

                </TextInput>

                <TouchableOpacity style={styles.tch} onPress={() => {
                        setBas(!bas)
                }}>
                    {bas ? (<Image style={styles.img1} source={require('../Img/view.png')}></Image>
                    ) : (<Image style={styles.img1} source={require('../Img/unview.png')}></Image>)}

                </TouchableOpacity>

            </View>
            <Pressable style={styles.pre} onPress={() => {
                handleCheck();
            }} >
                <Text style={styles.text1}>Submit</Text>
            </Pressable>

            <Pressable style={styles.pre1} onPress={()=>{
                navigation.navigate('DangKy')
            }}>
                <Text style={styles.text2}>Đăng Ký</Text>
            </Pressable>
            
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,


    },
    img: {
        width: 500,
        height: 650,

        position: 'absolute'

    },
    text: {
        fontSize: 30,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
        padding: 70
    },
    view1: {
        flexDirection: 'row',
        alignItems: 'center',

        padding: 20,



    },
    ip: {
        fontSize: 25,
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 15,
        width: 250,
        height: 45,
        backgroundColor: 'white'

    },
    ip1: {
        fontSize: 25,
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 15,
        width: 250,
        height: 45,
        backgroundColor: 'white',


    },
    img1: {
        width: 25,
        height: 25,
        backgroundColor: 'white',
        margin: -30,
        
    },
    pre: {
        alignItems: 'center',
        padding: 60,
       
        
    },
    text1: {
        fontSize: 30,
        borderWidth: 1,
        width: 170,
        height: 50,
        borderRadius: 10,
        backgroundColor: 'white',
        textAlign: 'center',
        

    },
    tch:{
        bottom:-15
    },
    pre1:{
        alignItems:'center',
        
    },
    text2:{
        fontSize:25,
        fontWeight:'500',
        backgroundColor:'white',
        borderWidth:1,
        width:140,
        height:45,
        textAlign:'center',
        borderRadius:10,
        margin:10
    }

})
export default Login;
