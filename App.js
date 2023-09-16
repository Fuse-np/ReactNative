import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { color } from 'react-native-reanimated'

function Feed(){
  return(
    <View style ={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Feed</Text>
    </View>
  )
}

function Proflie(){
  return(
    <View style ={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Proflie</Text>
    </View>
  )
}

function Notifications(){
  return(
    <View style ={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Notification</Text>
    </View>
  )
}

const Tab = createMaterialBottomTabNavigator();

function MyTab(){
  return(
    <Tab.Navigator
      initialRouteName='Feed'
      activeColor='#F045D5'
      labelStyle = {{fontSize:12}}
      style ={{backgroundColor:'tomato'}}
    >
       <Tab.Screen
       name = 'Feed'
       component= {Feed}
       options={{
        tabBarLabel:'Home',
        tabBarIcon : ({color})=>(
          <MaterialCommunityIcons name='home' color={color} size={26}/>

        )
       }}
      />
      <Tab.Screen
       name = 'Notifications'
       component= {Notifications}
       options={{
        tabBarLabel:'Updates',
        tabBarIcon : ({color})=>(
        <MaterialCommunityIcons name='bell' color={color} size={26}/>
        )
       }}
      />
      <Tab.Screen
       name = 'Proflie'
       component= {Proflie}
       options={{
        tabBarLabel:'Profile',
        tabBarIcon : ({color})=>(
          <MaterialCommunityIcons name='account' color={color} size={26}/>
        )
       }}
      />
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