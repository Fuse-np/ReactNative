import { View, Text } from 'react-native'
import React from 'react'

const MyCustomTextWith = ({fname, lname}) => {
    return(
        <View>
            <Text>Your First Name is {fname}! and Last name is {lname}</Text>
        </View>
    )
}

const CustomText = () => {
  return (
    <View>
      <MyCustomTextWith fname="Nattaphong" lname="Pratis"/>
    </View>
  )
}

export default CustomText