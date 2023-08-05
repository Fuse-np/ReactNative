import { StyleSheet, Text, View } from 'react-native';
import TouchablePractice from './components/Touchablepractice';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchablePractice/>
    </View>
  );
}

const styles = StyleSheet.create({

   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   }
})