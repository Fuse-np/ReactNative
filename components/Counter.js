import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Counter = () => {
    const [count , setCount ] = useState(0);

  return (
    <View style={style.container}>
      <Text>{count}</Text>
      <button title = 'Click me'
        onPress={() => {setCount(count+1)}}
      />
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})