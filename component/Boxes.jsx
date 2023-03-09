import React from 'react'
import { TouchableOpacity,StatusBar,ScrollView , Image ,Text, View ,StyleSheet} from 'react-native';
import { Surface, Stack ,AppBar, HStack, IconButton } from "@react-native-material/core";
import { Card, } from 'react-native-paper';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";





export function Boxes({navigation}) {
    return (
        <View style={{backgroundColor:"white"}}>
      <StatusBar backgroundColor='black' style="light" />
      <AppBar style={{  backgroundColor: "#78A206" }}
    title="Boxes"
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
      <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
       {/* start large box */}
       <Card style={styles.card}>
        <Card.Content>
         
        
     <View style={styles.box1}>
        <View style={styles.boxes}>
        <Image
          style={styles.boxImg}
          source={{uri :'https://i.pinimg.com/236x/c5/5a/31/c55a31a7c8f68786b5c1ad89e8ae6288.jpg', width:300,
      height:270,}}
        />
        

        </View>

        <View style={styles.contentName}>
         <Text style={styles.names}>Large Box</Text>
         <Text style={styles.price}>Price: 2000 EGP</Text>
        </View>

      
        <View >
         <TouchableOpacity 
                  style={{ width: 120, height: 50, backgroundColor: "#78A206", marginLeft: "auto",marginRight:"auto", borderRadius: 24 }}

        onPress={() => {
            navigation.push("largebox");
        }}>
         <Text style={{color:'#fff',textAlign:"center",marginTop:12}}> Show More </Text>
         </TouchableOpacity>
        </View> 

       
       

     </View> 
     </Card.Content>
  </Card>  
     {/* end large box */} 
       {/* start Meduim  box */}
       <Card style={styles.card}>
        <Card.Content>
         
        
     <View style={styles.box1}>
        <View style={styles.boxes}>
         <Image
          style={styles.boxImg}
          source={{uri :'https://i.pinimg.com/236x/c5/5a/31/c55a31a7c8f68786b5c1ad89e8ae6288.jpg', width:300,
      height:270,}}
        />
        </View>

        <View style={styles.contentName}>
         <Text style={styles.names}>Meduim  Box</Text>
         <Text style={styles.price}>Price: 1000 EGP</Text>
        </View>

      
        <View >
         <TouchableOpacity
                  style={{ width: 120, height: 50, backgroundColor: "#78A206", marginLeft: "auto",marginRight:"auto", borderRadius: 24 ,marginBottom:30}}

        onPress={() => {
            navigation.push("MeduimBox");
        }}>
         <Text style={{color:'#fff',textAlign:"center",marginTop:12}}> Show More </Text>
         </TouchableOpacity>
        </View> 

       
       

     </View> 
     </Card.Content>
  </Card>  
     {/* end Meduim box */} 
    
       {/* start small box */}
       <Card style={styles.card}>
        <Card.Content>
         
        
     <View style={styles.box1}>
        <View style={styles.boxes}>
         <Image
          style={styles.boxImg}
          source={{uri :'https://i.pinimg.com/236x/c5/5a/31/c55a31a7c8f68786b5c1ad89e8ae6288.jpg', width:300,
          height:270,}}
        />
        </View>

        <View style={styles.contentName}>
         <Text style={styles.names}>Small Box</Text>
         <Text style={styles.price}>Price: 500 EGP</Text>
        </View>

      
        <View >
         <TouchableOpacity
                  style={{ width: 120, height: 50, backgroundColor: "#78A206", marginLeft: "auto",marginRight:"auto", borderRadius: 24 }}

        onPress={() => {
            navigation.push("SmallBox");
        }}>
         <Text style={{color:'#fff',textAlign:"center",marginTop:12}}> Show More </Text>
         </TouchableOpacity>
        </View> 

     </View> 
     </Card.Content>
  </Card>  
     {/* end small box */} 
     
                  
    </View>
  </ScrollView>

 </View>
    );
}

//style for page


const styles = StyleSheet.create({
   

    card:{
        margin:20,
        backgroundColor:'white',
        padding:50
    
    },
    

    boxes:{
        alignItems: 'center',
      justifyContent: 'center',
    },
   
      title:{
      color:'#333' , 
      fontSize:30 , 
      fontWeight:'bold' , 
      textAlign:'center',
      borderRadius:5,
      marginTop:10,
    
    },
    
  
    names:{
    textAlign:'center',
     fontSize:20,
    
      marginTop:30,
      marginBottom:20,
      
      fontWeight:'bold' , 
      
    },


    price:{
      fontSize:15,
      textAlign:'center',
       marginBottom:20,
    },
   
    btn:{
      textAlign:'center',
      backgroundColor: "#78A206",
      padding: 15,
      marginHorizontal:100,
      margin:20,
      width: 120,
      borderRadius: 4,
      color: "white",
      fontSize:16,
      
     },
  
  });