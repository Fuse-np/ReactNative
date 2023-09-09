import { View, Text, Button} from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const HomeScreen = ({navigation}) => {
     
    return(
        <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Text>Home Screen</Text>
          <Text>{'\n'}</Text>
          <Button title='Go to Details' onPress={()=> {
            // 1.Navigate to the details route with param
            navigation.navigate('Details',{
                itemId : 1088,
                otherParam : 'React Native App'
            })
          }}/>
        </View>
      )
}

export default HomeScreen