import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, FlatList} from 'react-native'
import React,{useState,useEffect} from 'react'
import { RefreshControl } from 'react-native-web';

const FlatListAPI = () => {

  const[refreshing,setRefreshing] = useState(true);
  const[dataSource,setDataSource] = useState([]);

  useEffect(() => {

    getData();

  },[]);

  //Service to get the data from the sever to render
  const getData = async () => {

    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((responseJson) => {
       setDataSource(responseJson);
       setRefreshing(false);
    }).catch((error) => {
       console.error(error);
    });

  };

  const ItemSeparatorView = () => {

    return(
      //FlatList Item Separator
      <View style = {{height:0.5, width:'100%', backgroundColor:'#C8C8C8'}}></View>
    );

  };

  const onRefresh = () =>{
    //Clear old data of the list
    setDataSource([]);
    //Call the service to get the data from the sever to render
    const getData = async () => {

      await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
         setDataSource(responseJson);
         setRefreshing(false);
      }).catch((error) => {
         console.error(error);
      });
  
    };

    const getItem = (item) => {
        //Fucntion for click on an item
        alert('Id : ' + item.id + ' Title : ' + item.title)
    };
  

  };

  const ItemView = (item) => {

    return(
      <Text style = {styles.itemStyle} onPress={() => getItem(item)}>
         {item.title}
      </Text>
    )

  }

  return (

    <SafeAreaView style={{flex:1}}>
       <View style = {styles.container}>   
          {refreshing? <ActivityIndicator/> : null}
          <FlatList
          data = {dataSource}
          keyExtractor={(index) => index.toSting()}       
          ItemSeparatorComponent = {ItemSeparatorView} 
          renderItem = {ItemView}
          refreshControl = {
                <RefreshControl
                  refreshing = {refreshing}
                  onRefresh = {onRefresh}
                />
          }
          />
       </View>
    </SafeAreaView>

  )
}

export default FlatListAPI

const styles = StyleSheet.create({
        container: {
        justifyContent: 'center',
        flex: 1,
        marginTop: 10,
        },
        itemStyle: {
        fontSize: 20,
        padding: 10,
        },
});
    