import React from 'react'; 
import { componentDidMount } from 'react';
import { View,FlatList, Text, TextInput, Button,StyleSheet,Image,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import moment from "moment"
/*posts=[//임시 데이터
    {
        id:"Kang Dong Yeon",
        name:"Kang Dong Yeon",
        text:"바퀴벌레 잡아줄 사람? ",
        timestamp:1569109273726,
        //avatar:require("../assets/images/Splash.png"),
        //image:require("../assets/images/Splash.png")
    },
    {
        id:"Lee Jun Ha",
        name:"Lee Jun Ha",
        text:"I'm so lonely. I need friend. ",
        timestamp:1569109273726,
        //avatar:require("../assets/images/Splash.png"),
        //image:require("../assets/images/Splash.png")
    }
]*/
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer,useNavigation } from '@react-navigation/native';


const Stack = createStackNavigator();

//const navigation=useNavigation();
export default class FeedScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          posts: [], // Initialize with an empty array
          newPostText: "",
        };
      }
    
      componentDidMount() {
        // Fetch data from your backend when the component mounts
        axios.get('http://10.0.2.2:3000/board', {})
          .then(response => {
            console.log(response.data);
            // Check if the response contains the "board" object
            const processedData = response.data.map(item => ({
                
                id:item.id,
                nickname:item.nickname,
                content:item.content,
                created_at:item.created_at

               }));
               this.setState({posts:processedData});
          })
          .catch((error) => {
            // Handle other errors here
            console.error('There was an error!', error);
          });
      }
      
    renderPost=(post)=>{
        
        
        return(
            <View style={styles.feedItem}>
                <Ionicons name="ios-person-circle-outline" size={34} color="orange" style={styles.avartar}/>
                <View style={{flex:1}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                        <View>
                            <Text style={styles.name}>{post.nickname}</Text>
                            <Text style={styles.timestamp}>{moment(post.created_at).fromNow()}</Text> 
                        </View>
                        <Ionicons name="ios-settings-outline" size={24} color="orange"/>

                    </View>
                    <Text style={styles.post}>{post.content}</Text>
                    <Image source={post.image} style={styles.postImage} resizeMode='cover'/>
                    <View style={{flexDirection:"row",}}>
                        <Ionicons name="ios-heart" size={24} color="orange" style={{marginRight:16}}/>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Comment',{ postId: post.id })}>
                        <Ionicons name="chatbox" size={24} color="orange" style={{marginRight:16}}/>
                        </TouchableOpacity>
                    </View>
                </View> 
            </View>
        )
    }
    
 

    handleAddPost = () => {
        const newPostData = {
            title:'asfasf',
            content: this.state.newPostText,
            nickname: "cowcow",
           
            
            //avatar: require("../assets/img/skku.jpg"),
            //image: require("../assets/img/tempimage2.png"), // Change the image source
        };

        // Update the state with the new post
        axios.post('http://10.0.2.2:3000/board/write', newPostData)
        .then(response => {
          // Handle a successful response, e.g., refresh the feed
          console.log('New post created successfully', response.data);
          // You can also refresh the feed by fetching the updated data from the server.
          // Call your data fetching function here, like this.componentDidMount();
        })
        .catch(error => {
          // Handle errors here
          console.error('Error creating a new post', error);
        });
    };
    render(){
        
        return(
          
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}> 
                    Feed
                    </Text>
                </View>
                <TouchableOpacity
  style={styles.postButton} // Apply custom style and background color here
  onPress={this.handleAddPost}
>
  <Text style={{ color: 'white' }}>Add Post</Text>
</TouchableOpacity>
                
                
                <TextInput
    placeholder="Enter your post here..."
    onChangeText={text => this.setState({ newPostText: text })}
    value={this.state.newPostText}
    multiline={true}
    style={styles.textInput}
/>

                <FlatList
                style={styles.feed}
                data={this.state.posts}
                renderItem={({item})=>this.renderPost(item)}
                keyExtractor={item=>item.id}
                showsVerticalScrollIndicator={false}

                />
            </View>
            
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FFF5E1"
        

    },
    header:{
        paddingTop:64,
        paddingBottom:16,
        backgroundColor:"#FFF",
        alignItems:"center",
        justifyContent:"center",
        borderBottomWidth:1,
        borderBottomColor:"#EBECF4",
        shadowColor:"#454D65",
        shadowOffset:{height:5},
        shadowRadius:15,
        shadowOpacity:0.2,
        zIndex:10,
        fontFamily:"Pretendard-Regular"
    },
    headerTitle:{
        fontSize:20,
        fontWeight:"500",
        fontFamily:"Pretendard-Regular"
    },
    feed:{
        marginHorizontal:16
    },
    feedItem:{
        backgroundColor:"#FFF",
        borderRadius:20,
        padding:16,
        flexDirection:"row",
        marginVertical:8,
        elevation:10,
    },
    avartar:{
       
        marginRight:8
    },
    name:{
        fontSize:15,
        fontWeight:"500",
        color:"#454D65",
        fontFamily:"Pretendard-Regular"
    },
    timestamp:{
        fontSize:11,
        color:"#C4C6CE",
        marginTop :2,
        fontFamily:"Pretendard-Regular"
    },
    post:{
        marginTop:30,
        fontSize:14,
        color:"black",
        fontFamily:"Pretendard-Regular",
        marginRight:100
    },
    postImage:{
        width:undefined,
        height:0,
        borderRadius:5,
        marginVertical:16
    },
    textInput: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 10,
        marginVertical: 8,
        fontFamily:"Pretendard-Regular",
        elevation:10
    },
    postButton: {
        backgroundColor: 'orange', // Change this to your desired orange color
        color: 'white', // Set text color to white for better contrast
        borderRadius: 5, // Add border radius for a nicer look
        padding: 10, // Adjust padding as needed
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily:"Pretendard-Regular"
      }
})