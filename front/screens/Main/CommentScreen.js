import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList,StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, } from '@react-navigation/native';
let userId=''
const CommentScreen = ({ route }) => {
   const navigation=useNavigation()
        const { postId } = route.params; // 게시물 ID를 받아옴
      console.log(postId)
      const [comment,setComment]=useState('');
      const [commentList,setCommentsList]=useState([]);
        // 나머지 코드...
        
    const postComment=()=>{
        if (comment.trim() !== '') {
            // Create a new comment object
            const newComment = {
                id: new Date().getTime().toString(),
                text: comment,
                userId:postId,
                timestamp: new Date().toISOString(),
    }
    setCommentsList(prevComments => [...prevComments, newComment]);

            // Clear the comment input field
            setComment('');
        }
    }
  return (
   <View style={styles.container}>
    <View
    style={styles.header}>
        <Text style={styles.headerTitle}>
            Comments
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('MainScreen')}>
        <Ionicons name="backspace-outline" size={33} style={styles.backspaceButton}/>
        </TouchableOpacity>
    </View>
    <FlatList data={commentList}
            keyExtractor={item=>item.id}
            renderItem={({item})=>(
                <View style={styles.flatlist}>
                    <View style={styles.flatlistTitle}>
                <Ionicons name="ios-person-circle-outline" size={34} color="orange"/>
                
                <Text style={styles.postid}>
                    {postId}
                </Text>
                <Text style={styles.Date}>
                    {new Date(item.timestamp).toLocaleString()} 
                </Text>
                </View>
                
                <Text style={styles.Text}>
                    {item.text}
                </Text>
                
                
                
                </View>
            )}/>
            
        
    <View style={styles.InputBar}>
        <TextInput
        value={comment}
        onChangeText={txt=>{
            setComment(txt);
        }}
        placeholder='type comment here...'style={styles.TextInput}/>
        <TouchableOpacity onPress={postComment}>
        <Text style={styles.SendButton}>Send</Text>
        </TouchableOpacity>
    </View>
   </View>
  );
}

export default CommentScreen;
const styles=StyleSheet.create({
container:{
    flex:1
},
header:{
    width:'100%',
    height:60,
    flexDirection:'row',
    borderBottomWidth:0.5,
    borderBottonColor:"#8e8e8e",
    alignItems:'center',
},
headerTitle:{
    marginLeft: 15,marginTop:35, fontSize:18, fontWeight:'600',fontFamily:"Pretendard-Regular"
},
backspaceButton:{
    marginTop:30,marginLeft:253
},
flatlist:{
    flexDirection: 'column', alignItems: 'left', padding: 10 

},
flatlistTitle:{
    flexDirection:'row'
},
postid:{
    marginLeft: 10
},
Date:{
    color: '#999', fontSize: 12, marginLeft: 10,fontFamily:"Pretendard-Regular"
},
Text:{
    marginLeft:8,fontFamily:"Pretendard-Regular"
},
InputBar:{
    witdth: '100%',
        height:60,
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#fff',
        fontFamily:"Pretendard-Regular"
},
TextInput:{
    width:'80%',marginLeft:20,fontFamily:"Pretendard-Regular"
},
SendButton:{
    marginRight:10,fontSize:20,fontWeight:'600',fontFamily:"Pretendard-Regular"
},
})