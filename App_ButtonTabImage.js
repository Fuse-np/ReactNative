import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

function HomeScreen(){
  return(
    <View style ={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <Text>Home</Text>
  </View>
  )
}

function SettingScreen(){
  return(
    <View style ={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Seting</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();

function MyTab(){
  return(
    <Tab.Navigator 
      screenOptions={({route})=>({
        tabBarIcon:({focused, color, size})=>{
          let iconName;
          if(route.name == 'Home'){
            iconName = focused ? 'ios-information-circle' : 'ios-information-outline'
          }else if(route.name == 'Setting'){
            iconName = focused ? 'list-outline' : 'ios-list'
          }
          //You can return any component that you loke here
          return <Ionicons name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor : 'tomato',
        tabBarInactiveTintColor: 'grey'
      }
      )}
      
    >
      <Tab.Screen name ='Home' component={HomeScreen}/>
      <Tab.Screen name ='Setting' component={SettingScreen}/>
    </Tab.Navigator>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <MyTab/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})