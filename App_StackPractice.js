import { View, Text, Button, StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import HomeScreen from './Screens/HomeScreen'
import DetailsScreen from './Screens/DetailsScreen'
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'

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
       {/* <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Overview'}}/>
       <Stack.Screen name='Details' component={DetailsScreen}/> */}

       <Stack.Screen name='FirstPage'  component={FirstPage}/>
       <Stack.Screen name='SecondPage' component={SecondPage}/>
       <Stack.Screen name='ThirdPage'  component={ThirdPage}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
