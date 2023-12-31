import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Giaodien from './Screen/Giaodien';
import Home1 from './Screen/Home1';
import Login from './Screen/login';
import Home2 from './Screen/Home2';
import Taikhoan from './Screen/User';
import DangKy from './Screen/DangKy';
//import Search from './Screen/search';
import Cart from './Screen/Cart';
import Appp from './Screen/App';
import GH from './Screen/App';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='giaodien' component={Giaodien} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='DangKy' component={DangKy} />
        <Stack.Screen name='Home1' component={Home1} />
        {/* <Stack.Screen name='Cart' component={Cart}/> */}
        <Stack.Screen name='Home2' component={Home2} />
        <Stack.Screen name='Taikhoan' component={Taikhoan} />
        <Stack.Screen name='GH' component={GH} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

