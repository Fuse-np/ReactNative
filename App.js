import { View, Text, Button, StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import HomeScreen from './Screens/HomeScreen'
import DetailsScreen from './Screens/DetailsScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
          screenOptions={{
           headerStyle:{
            backgroundColor:'#008b8b'
          },
            headerTintColor:'#ffff',
            headerTitleStyle:{
            fontWeight:'bold',
        }
      }}
    >
       <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Overview'}}
       initialParams={{itemId:42}}/>
       <Stack.Screen name='Details' component={DetailsScreen}/> 

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
