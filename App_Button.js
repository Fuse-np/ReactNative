import {
    StyleSheet, 
    Text, 
    View,
    SafeAreaView,
    Alert,
    Button
    } from 'react-native'
  import React from 'react'
  import styles from './components/Styles'
  
  const Seperator = () => <View style = {styles.seperator}/>
  
  const App = () => {
    return (
      <SafeAreaView style={styles.container}>
        
        <View>
          <Text style = {styles.title}>
            The title and onPress handler are required. It is recommended to set
            accessibilityLabel to help make your app usable by everyone.
          </Text>
          <Button
            title='PRESS ME'
            onPress={()=> alert('Simple button pressed')}
          
          />      
        </View>
        <Seperator/>
  
        <View>
          <Text style = {styles.title}>
            Adjust the color in a way that looks standard on each platform. On iOS,
            the color prop controls the color of the text. On Android, the color
            adjusts the background color of the button.
          </Text>
          <Button
            title='PRESS ME'
            color= 'green'
            onPress={()=> alert('Green button pressed')}    
          />      
        </View>
        <Seperator/>
  
        <View>
          <Text style = {styles.title}>
            All interaction for the component are disabled.
          </Text>
          <Button
            title='PRESS ME'
            disabled='true'       
          />
        </View>
        <Seperator/>
  
        <View>
          <Text style = {styles.title}>
            This layout strategy lets the title define the width of the button.
          </Text>
          <View styles={styles.fixToText}>
            <Button
              title='LEFT BUTTON'
              color= 'black'
              onPress={()=> alert('Left button pressed')}    
            />
            
            <Button
              title='RIGHT BUTTON'
              color= 'red'
              onPress={()=> alert('Right button pressed')}    
            /> 
          </View>     
        </View>
  
      </SafeAreaView>
    )
  }
  
  export default App
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',    
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    seperator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    }
  })