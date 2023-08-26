import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
/*import TouchablePractice from './components/Touchablepractice';*/
import UseEffectFlatList from './components/UseEffectFlatList';
import RandomUnderScreen from './components/RandomUnderScreen';
import FlatList_Example1 from './components/FlatList_Example1';
import FlastListAPI from './components/FlastListAPI';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <TouchablePractice/> */}
      {/* <UseEffectFlatList/> */}
      {/* <RandomUnderScreen/> */}
      {/* <FlatList_Example1/> */}
      { <FlastListAPI/> }

    </View>
  );
}
/* const styles = StyleSheet.create({

   /* container: {
    flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   } 
}) */