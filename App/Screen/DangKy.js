import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  Image
} from "react-native";

var url = "https://65561aa484b36e3a431f0c8a.mockapi.io/user";

const DangKy = () => {
  const navigation = useNavigation();
  const [name, setName] = useState();
  const [pas, setPas] = useState();
  const [ten, setTen] = useState();
 
  const [state, setState] = useState([]);
  const route = useRoute();
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
  return (
    <View style={styles.container}>
      <Pressable style={styles.pre1} onPress={() => navigation.navigate('Login')}>
        <Image style={styles.img}source={require('../Img/back.png')}></Image>
        <Text style={styles.text1}>Đăng Ký Tài khoản</Text>
      </Pressable>
      

      <View style={styles.view1}>
        <TextInput
          style={styles.textIn}
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
          placeholder="Email"
        />
        <TextInput
          style={styles.textIn}
          value={pas}
          onChangeText={(text) => {
            setPas(text);
          }}
          placeholder="Password"
        />
        <TextInput
          style={styles.textIn}
          value={ten}
          onChangeText={(text) => {
            setTen(text);
          }}
          placeholder="Name"
        />
        
      </View>

      <View style={styles.view2}>
        <Pressable
          style={styles.Pre}
          onPress={() => {
            fetch(url, {
              method: "POST",
              body: JSON.stringify({
                name: ten,
                email: name,
                pass: pas,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            });
            
            setTen("");
            setName("");
            setPas("");
          }}
        >
          <Text style={styles.textPre}>Đồng ý</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DangKy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  view: {
    alignItems: "center",
    marginTop: 60,
  },
  view1: {
    alignItems: "center",
  },
  view2: {
    margin: 30,
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontFamily: "Arial",
    fontWeight: 700,
  },
  textIn: {
    height: 50,
    width: 330,
    backgroundColor: "#7e7979",
    marginTop: 30,
    borderRadius: 20,
    padding: 20,
    color: "#fff",
    fontSize: 16,
  },
  Pre: {
    height: 50,
    width: 200,
    borderRadius: 30,
    backgroundColor: "#51a551",
    alignItems: "center",
    justifyContent: "center",
  },
  textPre: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 700,
  },
  text1:{
    fontSize:30,
    alignItems:'center',
    textAlign:'center',
    margin:25
  },
  img:{
    width:30,
    height:20
  },
  pre1:{
    flexDirection:"row",
    alignItems:'center'
  }
});