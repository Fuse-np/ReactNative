import { StyleSheet, Text, View ,FlatList ,ActivityIndicator} from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios'

const UseEffectFlatList = () => {

    const [data,setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //Fech data from the API using axios
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                //Handle successful reponse
                setData(response.data);
                setIsLoading(false);
            })
            .catch(() => {
                //Handle error
                    console.error('Error fetching data : ',error)
                    setIsLoading(false);
            })
    
    },[])//The emty dependency array ensures this effect runs only once the component mounts

    if(isLoading){
        return
            <View style={{flex: 1 ,justifyContent:'center' ,alignItems:'center'}}>
                <ActivityIndicator size="large" color="#0000FF" />
            </View>
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Post from API using FlatList</Text>
        <FlatList
                data = {data} 
                keyExtractor = {(item) => item.id.toString()}       
                renderItem = {(item) => (
                    <View style={styles.post}>
                        <text style={styles.postTitle}> {item.title} </text>
                        <text> {item.body} </text>
                    </View>
                )}
        
        />
    </View>
  )
}

export default UseEffectFlatList

const styles = StyleSheet.create({

    container : {
        flex: 1,
         padding :20,
         backgroundColor:'#f0f0f0'
       } ,
    title : {
         fontSize24,
         fontWeight:'bold',
         marginBottom:20
       },
    post : {
         marginBottom:20,
         padding:10,
         backgroundColor:'white',
         borderRadius:5,
         borderWidth:1,
         borderColor:'#ccc'
       },
    postTitle:{
         fontSize:18,
         fontWeight:'bold',
         marginBottom:5
       }
})