import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image} from 'react-native'
import React,{useState,useEffect} from 'react'


const News = () => {

    const [article,setArticle] = useState();
    const [loading,setLoading] = useState(true);

    useEffect(() => {

        getData();

    },[])

    const getData = async () => {
        try{

             const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-07-26&sortBy=publishedAt&apiKey=3a58e56940b2492c8f6fb0f687ec3ac5')
             const data = await response.json();
             setArticle(data.articles);
             setLoding(false);

        }catch(error){

            console.error('Error fetching user: ',error);
            setLoding(false);

        }
    }

    const _renderItem = ({item}) => {

        let urlToImage = (item.urlToImage !== null)? item.urlToImage 
        : 'http://via.placeholder.com/150*100'

        return(
             <View style = {{flex:1}}>
                 <View style = {{flex:1, flexDirection:'row', margin:10}}>

                     <Image source = {{uri : urlToImage}} resizeMode = 'cover' 
                     style = {{flex:1, width:'100%', height:'100%'}}/>
                     <View style={{width:200, alignSelf:'center', margin:5}}>
                            <Text style={{fontSize:14,marginBottom:5}}>{item.title}</Text>
                            <Text style={{fontSize:10}}>{item.source.name}</Text>
                     </View>
                     
                 </View>    
             </View>
        )

    };

    const _onRefesh = () => {
        setLoading(true);
        getData();
    }
s
  return (
    <View>
        {
            loading?(
                <ActivityIndicator size="large" color="#0000ff"/>
            ):(
                <FlatList
                 data={article}
                 keyExtractor={(index) => index.toString()}
                 renderItem={_renderItem}
                 refreshing={loading}
                 onRefresh={_onRefesh}

                
                />
            )
        }
    </View>
  )
}

export default News

const styles = StyleSheet.create({})