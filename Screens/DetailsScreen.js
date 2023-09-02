import { View, Text, Button} from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const DetailsScreen = ({navigation}) => {
    
    return(
        <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Text>Details Screen</Text>
            <Text>{'\n'}</Text>
          <Button title='Go to Details...Again' onPress={()=>navigation.push('Details')}/>
            <Text>{'\n'}</Text>
          <Button title='Go to Home' onPress={()=>navigation.navigate('Home')}/>
            <Text>{'\n'}</Text>
          <Button title='Go Back' onPress={()=>navigation.goBack()}/>
        </View>
       )
}

export default DetailsScreen