import 'react-native-gesture-handler';
import { View, Text , Linking} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';

function Feed(){
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Feed</Text>
    </View>
  );s
}

function Article(){
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Article</Text>
    </View>
  );
}

function CustomDrawerContent (props){
  return(
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
      <DrawerItem label= "Help" onPress={()=> Linking.openURL('https://reactnative.dev')}/>

    </DrawerContentScrollView>
  )
}


const Drawer = createDrawerNavigator();
const Stack  = createNativeStackNavigator();

function MyDrawer(){
  return(
    <Drawer.Navigator 
    drawerContent={(props)=> <CustomDrawerContent {...props}/> }
    screenOptions={{
      drawerStyle:{
        backgroundColor:'#BFF7F0',
        width: 240,
      }
    }}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
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
