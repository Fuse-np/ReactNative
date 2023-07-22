import { StyleSheet, Text, View } from "react-native";
import ViewBoxesWithColorAndText from "./components/ViewBoxesWithColorAndText";
import DisplayandImage from "./components/DisplayandImage";
import LotsOfGreeting from "./components/LotsOfGreeting";
import CustomText from "./components/CustomText";
import Counter from "./components/Counter";
import IncrementCounter from "./components/IncrementCounter";
import MyInput from "./components/Myinput";
import From from "./components/From";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ViewBoxesWithColorAndText/> */}
      {/* <DisplayandImage/> */}
      {/* <LotsOfGreeting/> */}
      {/* <CustomText/> */}
      {/* <Counter/> */}
      {/* <MyInput/> */}
      {/* <IncrementCounter/> */}
      <From/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
     flex:1,   
     justifyContent:'center',    
     alignItems:'center'   
  }
 })