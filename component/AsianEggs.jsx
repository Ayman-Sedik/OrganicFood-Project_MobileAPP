import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { Button, Card, List } from 'react-native-paper';
import { AppBar, HStack, IconButton,ListItem } from '@react-native-material/core';






export function AsianEggs({navigation}) {

   
  const [Meals, setMeals] = useState([])
  

async function getData(setMeals) {
		let {data} = await axios.get("http://192.168.1.15:5000/meals")
		// console.log(res)
		setMeals(data )
	
	}
  useEffect(() => {
      
    getData(setMeals )
    },[])
// console.log(Meals)

 
let mealData = Meals[2]
console.log(mealData)

  return (
    <View style={{backgroundColor:"white"}} >
           <StatusBar backgroundColor='black' style="light" />

      <ScrollView>
         <AppBar style={{  backgroundColor: "#78A206" }}
    title="Asian eggs"
    leading={props => (
      <IconButton icon={props => <Icon name="arrow-left" {...props} />} {...props} onPress={()=>{
                            navigation.push("Meals")
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
    {Meals.length!=0? 
    <Card style={styles.card}>
        <Card.Content>
          <View style={{alignItems:'center',}}>
       <Image style={{ borderRadius:15, width:300,
          height:300,}}
          source={{uri:mealData.src}}
        /> 
    </View>
    <View style={styles.contentName}>
     <Text style={styles.names}>{mealData.name}</Text></View>
     <Text style={styles.title}>Ingredient</Text>
     {mealData.ingredient.map((item,index)=>{
       return(
        <View key={index}>
          <ListItem  secondaryText={item}/>
        </View>
       )
     })}
       <Text style={styles.title}>Description</Text>
       {mealData.desc.map((item,index)=>{
        return(
          <View key={index}>
          <ListItem  secondaryText={item}/>
        </View>
        )
       })}
        </Card.Content>
        </Card>
    
    :<ActivityIndicator style={{marginTop:50,marginLeft:"auto",marginRight:"auto"}} animating={true} color={MD2Colors.red800} />}
       </ScrollView>
    </View>
  )

      }
const styles = StyleSheet.create({

  card:{
    padding: 10,
    backgroundColor:"white"
  },
  names:{
    textAlign:'center',
     fontSize:17,
    
      margin:20,
      
      fontWeight:'bold' , 
      
    },
    title:{
        textAlign:'center',
         fontSize:20,
         color:'#78A206',
          margin:30,
          
          fontWeight:'bold' , 
          
        },
})
