import { View, Text, TextInput, Button} from 'react-native'
import React from 'react'

const CreatePostScreen = ({navigation}) => {

    const[postText,setPostText] = React.useState('');

  return (
    <View>
        <TextInput multiline placeholder='Plese say Hello world'
        style={{height:200, padding:10, backgroundColor:'white'}}
        value={postText} onChange={setPostText}/>

        <Button title='Done'
        // Pass and merge param
        onPress={() => {
            navigation.navigate({
                name :'Index',
                param : {post : postText},
                merge : true
            })
        }}
        />
      
    </View>
  )
}

export default CreatePostScreen