import { View, Text, Button} from 'react-native'
import React from 'react'

const IndexScreen = ({navigation, route}) => {

    React.useEffect(() => {
        if (route.params?.post){
            //Post update,do something with 'route.param.post'
            //For example,sent the post to the sever
        }
    },[route.params?.post])

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Button title='Create Post' onPress={()=>navigation.navigate('CreatePost')}/>
    <Text style={{margin:10}}>Post : {route.params?.post}</Text>
    </View>
  )
}

export default IndexScreen