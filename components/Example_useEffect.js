import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Example_useEffect = () => {

    const [data,setData] = useState([]);

    useEffect(() => {
        //Fech data from the API using axios
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                //Handle successful reponse
                setData(response.data);
            })
            .catch(() => {
                //Handle error
                console.error('Error fetching data : ',error)
            })

    },[])//The emty dependency array ensures this effect runs only once the component mounts

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post from API</Text>
      {
        data.map((post) => (

            <View key={post.id} style={styles.post}>
                    <text style={styles.postTitle}> {post.title} </text>
                    <text> {post.body} </text>
            </View>

        ))

      }
    </View>
  )
}

export default Example_useEffect

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
