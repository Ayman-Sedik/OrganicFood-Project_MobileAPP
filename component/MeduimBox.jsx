import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Surface, Stack } from "@react-native-material/core";
import { Button, Card, List } from 'react-native-paper';
import { AppBar, IconButton,HStack } from '@react-native-material/core';
import { Flex, Spacer } from 'react-native-flex-layout';






export function MeduimBox({navigation}) {

   const [Box, setMeals] = useState([])
  

async function getData(setMeals) {
		let {data} = await axios.get("http://192.168.1.15:5000/mediumBox")
		// console.log(res)
		setMeals(data )
	
	}
  useEffect(() => {
      
    getData(setMeals )
    },[])
console.log(Box)

 
// let mealData = Meals[0]
// console.log(mealData)

  return (
    <View >
      <StatusBar backgroundColor='black' style="light" />

      <ScrollView>
         <AppBar style={{  backgroundColor: "#78A206" }}
    title="Meduim box "
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
          style={{marginTop:50}}
          source={{uri :'https://i.pinimg.com/236x/c5/5a/31/c55a31a7c8f68786b5c1ad89e8ae6288.jpg', width:300,
          height:270,}}
        />
        </View>
         
         <View style={styles.contentName}>
         <Text style={styles.names}>Meduim Box</Text>
        </View>
        <Text style={styles.title}>Ingredient</Text>
        <View >

    
    
        {Box.length!=0? Box.map((item,index)=>{
          return(
            <View key={index}>
   <Stack fill center spacing={4}>
    
    <Surface
      elevation={2}
      category="medium"
                        style={{ width: 370, height: 70, flexDirection: "row", alignItems: "center", marginTop: 50,justifyContent:"space-around" }}
    >
        <Text style={{fontSize:16,fontWeight:"bold"}}>{item.name} </Text>
        <Text style={{fontSize:16,fontWeight:"bold"}}>Wietght: {item.weight} </Text>
        </Surface>
  </Stack>
  </View>
          )
        }) :<ActivityIndicator style={{marginTop:50,marginLeft:"auto",marginRight:"auto"}} animating={true} color={MD2Colors.red800} />}


  </View>
         
        </Card.Content>
        {Box.length!=0?<View >
         <TouchableOpacity
                  style={{ width: 120, height: 50, backgroundColor: "#78A206",marginTop:50, marginLeft: "auto",marginRight:"auto", borderRadius: 24 }}

        onPress={() => {
            navigation.push("ContactUs");
        }}>
         <Text style={{color:'#fff',textAlign:"center",marginTop:12}}> Order now </Text>
         </TouchableOpacity>
        </View>: <ActivityIndicator style={{marginTop:50,marginLeft:"auto",marginRight:"auto"}} animating={true} color={MD2Colors.red800} />}

       </Card>
    
       </ScrollView>
    </View>
  )

      }
const styles = StyleSheet.create({

  card:{
    // marginTop: 15,
    // marginBottom:15,
    padding: 10,
    backgroundColor:"white"
  },
  names:{
    textAlign:'center',
     fontSize:20,
    
      // margin:10,
      marginTop:50,
      
      fontWeight:'bold' , 
      
    },
    title:{
        textAlign:'center',
         fontSize:20,
         color:'#78A206',
          marginTop:20,
          
          fontWeight:'bold' , 
          
        },
})
