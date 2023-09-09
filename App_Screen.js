import { View, Text, Button, StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import HomeScreen from './Screens/HomeScreen'
import DetailsScreen from './Screens/DetailsScreen'
import IndexScreen from './Screens/IndexScreen'
import CreatePostScreen from './Screens/CreatePostScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator 
          mode = 'model'
          screenOptions={{
           headerStyle:{
            backgroundColor:'#008b8b'
          },
            headerTintColor:'#ffff',
            headerTitleStyle:{
            fontWeight:'bold',
        }
      }}>
        
       <Stack.Screen name='Index' component={IndexScreen} options={{title: 'MainPage'}}/>
       <Stack.Screen name='CreatePost' component={CreatePostScreen}/> 

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
