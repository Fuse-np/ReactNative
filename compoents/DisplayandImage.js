import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-web'

const DisplayandImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/react_logo.png')}
      />
      <Image
        style={styles.tinyLogo}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      />
    </View>
  )
}

export default DisplayandImage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    }
})