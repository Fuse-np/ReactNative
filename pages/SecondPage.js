import { View, Text, Button,  StyleSheet} from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const SecondPage = ({navigation}) => {

    return(
        <View style = {styles.container}>
          <Text style = {styles.textStyle}>This is the Second Page of the App</Text>

          <Button title='Go Back' onPress={()=>navigation.goBack()}/>
          <Button title='Go to SecondPage...Again' onPress={()=>navigation.push('SecondDrawer')}/>
          <Button title='Go to FirstPage' onPress={()=>navigation.navigate('FirstPage')}/>
          <Button title='Go to ThirdPage' onPress={()=>navigation.navigate('ThirdPage')}/>
        </View>
       )
}

export default SecondPage

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      fontSize: 25,
      textAlign: 'center',
      marginBottom: 16
    },
});
