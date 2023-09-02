import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";

const Login = () => {

  const [textInputName, setTextInputName] = useState("");
  const [TtextInputEmail, setTextInputEmail] = useState("");

  const checkTextInput = () => {
        if (!textInputName.trim()) {
            alert("Please Enter Name");
        } else if (!textInputEmail.trim()) {
            alert("Please Enter Email");
        } else {
            alert("Success");
    }
};

  return (

    <View style={styles.container}>
      <TextInput
            placeholder = "Enter Name"
            style = {styles.textInputStyle}
            value = {textInputName}
            onChangeText = {(value) => {

            setTextInputName(value);

        }}
      />

      <TextInput
             placeholder="Enter Email"
             style={styles.textInputStyle}
             value={textInputEmail}
             onChangeText={(value) => {

            setTextInputEmail(value);

        }}
      />

      <Text>{"\n"}</Text>
      <Button title="SUBMIT" onPress={checkTextInput} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({

    container: {
        flex:1,
        padding: 35,
    },
    textInputStyle: {
        width  : '100%',
        height : 40,
        paddingHorizontal : 5,
        borderWidth : 0.5,
        margin : 15,
    },

})