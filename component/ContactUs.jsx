import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text,TouchableOpacity, TextInput, StatusBar} from 'react-native'
import { View } from 'react-native'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Surface, Stack } from "@react-native-material/core";
import { Button, Card, List } from 'react-native-paper';
import { AppBar, IconButton,ListItem,} from '@react-native-material/core';
import { Flex, HStack, Spacer } from 'react-native-flex-layout';






export function ContactUs({navigation}) {

  const [text, setText] = useState("");

  return (
    <View >
      <StatusBar backgroundColor='black' style="light" />

      <ScrollView>
         <AppBar style={{  backgroundColor: "#78A206" }}
    title="Contact us"
    leading={props => (
      <IconButton icon={props => <Icon name="arrow-left" {...props} />} {...props} onPress={()=>{
                            navigation.push("Boxs")
                        }} />
    )}
    trailing={props => (
      <HStack>
        
        <IconButton
          icon={props => <Icon name="cart" {...props} />}
          {...props}
        />
      </HStack>
    )}/>
        
      <Card style={styles.card}>
    <Card.Content>
            
          <View style={{alignItems:'center',}}>
          <Image
          style={{borderReduis:15,}}
          source={{uri :'https://i.pinimg.com/236x/4d/57/49/4d57499333552d55ef59f6015d505ac6.jpg', width:150,
          height:150,}}
        />
        </View>
        <View style={styles.contentName}>
         <Text style={styles.names}> Contact Us</Text>
        </View>
         
        
  
    <TextInput style={styles.input}
      placeholder='FullName'
      variant="outlined" 
      value={text} onChangeText={(value) => setText()}
       />
      
  
    <TextInput style={styles.input}
      placeholder='E-mail'
      variant="outlined" 
      value={text} onChangeText={(value) => setText()}/>
  
    <TextInput style={styles.input}
      placeholder='Subject'
      variant="outlined" 
      value={text} onChangeText={(value) => setText()}/>


<TextInput style={styles.message}
    multiline={true}
    numberOfLines={6}
    variant="outlined"
    placeholder='Message'
    value={text} onChangeText={(value) => setText()}
    
    />
  
  <View >
         <TouchableOpacity
                           style={{ width: 120, height: 50, backgroundColor: "#78A206", marginLeft: "auto",marginRight:"auto", borderRadius: 24,marginTop:50 }}

          onPress={() => {setText(""); }}
        >
         <Text style={{color:'#fff',textAlign:"center",marginTop:13}}> Send</Text>
         </TouchableOpacity>
        </View> 
    
  
       </Card.Content>
       </Card>
    
       </ScrollView>
    </View>
  )

      }
const styles = StyleSheet.create({

  card:{
    // marginTop: 15,
    marginBottom:15,
    // padding: 10,
    backgroundColor:"white",
    margin:20,

    
  },
  names:{
    textAlign:'center',
     fontSize:30,
    //   margin:10,
      fontWeight:'bold' , 
      marginTop:12,
      marginBottom:12
      
    },
    input:{
        borderRadius:5,
        padding:10,
        margin:10,
        borderWidth:2,
        borderColor:'#d4d4d4',
    },
    message:{
         borderRadius:5,
        margin:10,
        borderWidth:2,
        padding:4,
        borderColor:'#d4d4d4',

    },
    
    btn:{
        textAlign:'center',
        backgroundColor: "#78A206",
        padding: 7,
        marginHorizontal:200,
        margin:20,
        width: 70,
        
        borderRadius: 5,
        color: "white",
        fontSize:16,
        
       },
})

