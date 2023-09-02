import { View, Text} from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const DetailsScreen = () => {
    return(
        <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>DetailScreen</Text>
        </View>
       )
}

export default DetailsScreen