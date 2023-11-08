import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Giaodien from './Screen/Giaodien';
import Home1 from './Screen/Home1';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Giaodien' screenOptions={{headerShown:false}}>
          {/* <Stack.Screen name='giaodien' component={Giaodien}/> */}
          <Stack.Screen name='Home1' component={Home1}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

