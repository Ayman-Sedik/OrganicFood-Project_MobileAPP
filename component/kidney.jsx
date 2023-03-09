import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { Button, Card, List } from 'react-native-paper';
import { AppBar, HStack, IconButton } from '@react-native-material/core';






export function Kidney({navigation}) {
  
  const [diseases, setDiseases] = useState({})
  

async function getData(setDiseases) {
		let {data} = await axios.get("http://192.168.1.15:5000/diseases")
		// console.log(res)
		setDiseases(data )
	
	}
  useEffect(() => {
      
    getData(setDiseases )
    },[])
console.log(diseases)

 
  let data = diseases[3]
  console.log(data)
  return (
    <View style={{backgroundColor:"white",flex:1}}>
                 <StatusBar backgroundColor='black' style="light" />

      <ScrollView>
         <AppBar style={{  backgroundColor: "#78A206" }}
    title="kidney"
    leading={props => (
      <IconButton icon={props => <Icon name="arrow-left" {...props} />} {...props} onPress={()=>{
                            navigation.push("Diseases")
                        }} />
    )}
    trailing={props => (
      <HStack>
        
        <IconButton
          icon={props => <Icon name="cart" {...props} />}
          {...props}
        />
      </HStack>
    )}
  />
      { data != undefined? <Image style={{ marginTop: 50, marginBottom: 50, marginLeft: "auto", marginRight: "auto",width:200,height:200 }}

       source={ {uri:data.image}}
       /> 
          : <ActivityIndicator animating={true} color={MD2Colors.red800} />}
        
        
          { data != undefined? <Text style={styles.title}>{data.question}</Text>: <ActivityIndicator animating={true} color={MD2Colors.red800} />}

      
{  data !=undefined?<Text style={{marginTop:10,padding:12,marginLeft:10}}> 1- {data.answer[0]}</Text>  :<ActivityIndicator animating={true} color={MD2Colors.red800} />}       
    {  data !=undefined?<Text style={{marginTop:2,padding:12,marginLeft:10}}> 2- {data.answer[1]}</Text>  :<ActivityIndicator animating={true} color={MD2Colors.red800} />}       
{  data !=undefined?<Text style={{marginTop:2,padding:12,marginLeft:10}}> 3- {data.answer[2]}</Text>  :<ActivityIndicator animating={true} color={MD2Colors.red800} />}       
        <Text style={{ textAlign: "center", marginTop: 20, color: "#78A206", fontSize: 22,fontWeight:"bold" }}>Our product</Text>
        {data != undefined ? data.products.map((product, index) => {
          return (
            <Card style={styles.mycard} key={index}>
    
              <Card.Cover style={{width:'100%',height:320 ,marginLeft:'auto',marginRight:'auto', backgroundColor:"white"}} 
              source={{ uri:product.src }} />
              <Card.Content>
                <Text style={{marginTop:10,fontSize:25,textAlign:"center" ,color:"#78A206", fontWeight:'bold'}} variant="titleLarge">{ product.name}</Text>
                <Text style={{ marginTop: 10, fontSize: 15,marginBottom:15,marginTop:15 }} variant="bodyMedium">{product.desc}</Text>

                <Text style={ { marginTop: 10, fontSize: 16, fontWeight:"bold" }} variant="bodyMedium">Price:{product.price} EGP</Text>

                      <Text style={{marginTop:10,fontSize:16,fontWeight:"bold"}} variant="bodyMedium">Quantity:  {product.quantity}</Text>

    </Card.Content>

    <Card.Actions>
      <Button style={{backgroundColor:"#78A206",borderColor:"#78A206"}}><Text style={{color:"white"}}>Add to cart</Text></Button>
    </Card.Actions>
            </Card>
          )
        }) : <ActivityIndicator style={{marginTop:50,marginLeft:"auto",marginRight:"auto"}} animating={true} color={MD2Colors.red800} />}

       </ScrollView>
    </View>
  )

      }
const styles = StyleSheet.create({
  title: {
    color:"#78A206",
    fontSize:22,
    textAlign:"center",
    fontWeight:"bold"

  },
  mycard:{
    marginTop: 15,
    marginBottom:15,
    padding: 10,
    backgroundColor:"white"
  }
})
