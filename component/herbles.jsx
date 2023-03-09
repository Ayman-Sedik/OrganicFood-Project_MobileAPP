import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { Button, Card, List } from 'react-native-paper';
import { AppBar, HStack, IconButton } from '@react-native-material/core';






export function Herbles({navigation}) {
  
  const [fruit, setfruits] = useState([])
  

async function getData(setfruits) {
		let {data} = await axios.get("http://192.168.1.15:5000/herbals")
		// console.log(res)
		setfruits(data )
	
	}
  useEffect(() => {
      
    getData(setfruits )
    },[])
console.log(fruit)

 
//   let data = fruits
//   console.log(data)
  return (
    <View style={{backgroundColor:"white",flex:1}}>
                 <StatusBar backgroundColor='black' style="light" />

      <ScrollView>
          <AppBar style={{ backgroundColor: "#78A206" }}
    title="Herbles"
    leading={props => (
      <IconButton icon={props => <Icon name="arrow-left" {...props} />} {...props} onPress={()=>{
                            navigation.push("HomePage")
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
        {fruit.length  != 0 ? fruit.map((product, index) => {
          return (
            <Card style={styles.mycard} key={index}>
    
              <Card.Cover style={{width:'100%',height:320 ,marginLeft:'auto',marginRight:'auto', backgroundColor:"white"}} 
              source={{ uri:product.src }} />
              <Card.Content>
                <Text style={{marginTop:10,fontSize:25,textAlign:"center" ,color:"#78A206", fontWeight:'bold'}} variant="titleLarge">{ product.name}</Text>
                <Text style={{ marginTop: 10, fontSize: 15,marginBottom:15,marginTop:15 }} variant="bodyMedium">{product.desc}</Text>
                {  product.offer!=0 ?    <Text style={{marginTop:10,fontSize:16,color:"red",fontWeight:"bold"}} variant="bodyMedium">OFFER:  {product.offer}%</Text>:false}

                <Text style={product.offer != 0 ? { marginTop: 10, fontSize: 15, textDecorationLine: "line-through" } : { marginTop: 10, fontSize: 16, fontWeight:"bold" }} variant="bodyMedium">Price:{product.price} EGP</Text>
                {  product.offer!=0 ?    <Text style={{marginTop:10,fontSize:16,fontWeight:"bold"}} variant="bodyMedium">Price:  {(product.price*product.offer)/100} EGP</Text>:false}

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

  },
  mycard:{
    marginTop: 15,
    marginBottom:15,
    padding: 10,
    backgroundColor:"white"
  }
})
