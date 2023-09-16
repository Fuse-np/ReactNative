import 'react-native-gesture-handler';
import { View, Text , Linking} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import CustomSideBarMenu from './pages/CustomSideBarMenu';

function CustomDrawerContent (props){
  return(
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
      <DrawerItem label= "Help" onPress={()=> Linking.openURL('https://reactnative.dev')}/>

    </DrawerContentScrollView>
  )
}

function FirstPageStack(){
  return(

  <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='First Page'component={FirstPage}/>
  </Stack.Navigator>

  );
}

function SecondPageStack(){
  return(

    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='Second Page'component={SecondPage}/>
  </Stack.Navigator>

  );
}


const Drawer = createDrawerNavigator();
const Stack  = createNativeStackNavigator();

function MyDrawer(){
  return(
    <Drawer.Navigator 
    drawerContent={(props)=> <CustomSideBarMenu {...props}/> }
    screenOptions={{
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
