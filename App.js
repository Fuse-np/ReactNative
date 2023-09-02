import { View, Text, Button} from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import HomeScreen from './Screens/HomeScreen'
import DetailsScreen from './Screens/DetailsScreen'


const App = () => {
  return (
    
    <Stack.Navigator initialRouteName='Home'>
     <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Overview'}}/>
     <Stack.Screen name='Details' component={DetailsScreen}/>
    </Stack.Navigator>

  )
}

export default App