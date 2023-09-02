import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'

const IncrementCounter = () => {

    const [age, setAge] = useState(23)

    const increment = () => {
          setAge(a => a + 1)
    }

return (
    <View>
        <Text style={{fontSize: 24, fontStyle: 'bold'}}>

        your age: {age}</Text>

        <Text>{'\n'}</Text>
            <Button
                title='+3'
                onPress={() => {
                    increment(); 
                    increment();
                    increment();
            }}
            />
            
            <Text>{'\n'}</Text>
            <Button
                title='+1'
                onPress={() => {
                    increment();
                } }
            />
        </View>
    )
}

export default IncrementCounter

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