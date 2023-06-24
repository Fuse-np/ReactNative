import { View, Text } from 'react-native'
import React from 'react'

const getFullname = (fn,sn,tn) => {

    return fn + " " + sn + " " + tn;

}

const Cat = () => {
  return (
    <View>
      <Text>Hello,I am {getFullname("Lily","Louis","Luca")}</Text>
    </View>
  )
}

export default Cat