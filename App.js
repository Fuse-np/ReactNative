import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

function Feed(){
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Feed</Text>
    </View>
  );
}

function Article(){
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Article</Text>
    </View>
  );
}

function FirstPageStack(){
  return(

  <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#047931'}}}>
    <Stack.Screen name='First Page'component={FirstPage}/>
  </Stack.Navigator>

  );
}

function SecondPageStack(){
  return(

    <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#047931'}}}>
    <Stack.Screen name='Second Page'component={SecondPage}/>
  </Stack.Navigator>

  );
}


const Drawer = createDrawerNavigator();
const Stack  = createNativeStackNavigator();

function MyDrawer(){
  return(
    <Drawer.Navigator screenOptions={{
      drawerStyle:{
        backgroundColor:'#BFF7F0',
        width: 240,
      }
    }}>
      <Drawer.Screen name='FirstDrawer' component={FirstPageStack} options={{drawerLabel:'First Page Option'}}/>
      <Drawer.Screen name='SecondDrawer' component={SecondPageStack} options={{drawerLabel:'Second Page Option'}}/>
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  )
}

export default App
