import React, {startTransition, useState} from 'react';
import {Text, View, Image,TextInput, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Linking} from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";


const HomePage = ({navigation}) => {
sendWhatsApp = () => {
  let msg = "Hi";
  let phoneWithCountryCode = "01000336015";

  let mobile =
    Platform.OS == "ios" ? phoneWithCountryCode : "+" + phoneWithCountryCode;
  if (mobile) {
    if (msg) {
      let url = "whatsapp://send?text=" + msg + "&phone=" + mobile;
      Linking.openURL(url)
        .then(data => {
          console.log("WhatsApp Opened");
        })
        .catch(() => {
          alert("Make sure WhatsApp installed on your device");
        });
    } else {
      alert("Please insert message to send");
    }
  } else {
    alert("Please insert mobile no");
  }
};
return (
    <View style={{backgroundColor:"#FFF",height:"100%"}} >

           <StatusBar backgroundColor='black' style="light" />

        <View style={styles.searchSection}>
            <View style={styles.InputContainer}>
              <MaterialIcons name="search" size={22} color= "gray"/>
              <TextInput
                style={{paddingHorizontal:2, fontSize:16}}
                placeholder="Search"
              />
              </View>

              <MaterialIcons name="shopping-cart" size={46} color= "#78A206"
                onPress={() => navigation.navigate('CartProduct')}/>
        </View>

        {/*----------------------- start Categories------------------------- */}
        <ScrollView style={{backgroundColor:"#FFF",height:"100%"}} >

        <Text style={styles.CategoryText}>Categories</Text>
            
        <View style={{flexDirection:'row'}}>
            <View style={styles.ImgeCategoriStyle}>           
              <Image source={require('../assets/images/homee.jpg')} style={styles.image}/>
              <TouchableOpacity onPress={() => navigation.navigate('Fruits')} >
                  <View style={styles.buttonCategoryView}>  
                  {/* ApI connect to fruits */}
                      <Text style={styles.FilterButton} >Fruits</Text>
                  </View>
              </TouchableOpacity>
        </View>

          <View style={styles.ImgeCategoriStyle}>           
            <Image source={require('../assets/images/home1.jpg')} style={styles.image}/>
            <TouchableOpacity onPress={() => navigation.navigate('Vegetable')}  >
                 <View style={styles.buttonCategoryView}>  
                 {/* ApI connect to vegetables */}
                    <Text style={styles.FilterButton} >Vegetables</Text>
                  </View>
              </TouchableOpacity>
          </View>
      </View>

      <View style={{flexDirection:'row'}}>
          <View style={styles.ImgeCategoriStyle}>           
            <Image source={require('../assets/images/milk.jpg')} style={styles.image}/>
            <TouchableOpacity onPress={() => navigation.navigate('Milks')}>
                 <View style={styles.buttonCategoryView}>  
                 {/* ApI connect to Milk */}
                    <Text style={styles.FilterButton} >Milk</Text>
                  </View>
              </TouchableOpacity>
          </View>

          <View style={styles.ImgeCategoriStyle}>           
            <Image source={require('../assets/images/meat.jpg')} style={styles.image}/>
            <TouchableOpacity onPress={() => navigation.navigate('Meats')}>
                 <View style={styles.buttonCategoryView}>  
                 {/* ApI connect to Meat */}
                    <Text style={styles.FilterButton}> Meat</Text>
                  </View>
              </TouchableOpacity>
          </View>
      </View>

      <View style={{flexDirection:'row'}}>

          <View style={styles.ImgeCategoriStyle}>           
            <Image source={require('../assets/images/meals.jpg')} style={styles.image}/>
            <TouchableOpacity onPress={() => navigation.navigate('Meals')}>
                 <View style={styles.buttonCategoryView}>  
                 {/* ApI connect to Meals */}
                    <Text style={styles.FilterButton}> Meals</Text>
                  </View>
              </TouchableOpacity>
          </View>

        <View style={styles.ImgeCategoriStyle}>           
            <Image source={require('../assets/images/herbals.jpg')} style={styles.image}/>
            <TouchableOpacity
            onPress={() => navigation.navigate('Herbles')}
            >
                 <View style={styles.buttonCategoryView}>  
                 {/* ApI connect to Harbels */}
                    <Text style={styles.FilterButton}>Herbals</Text>
                  </View>
              </TouchableOpacity>
          </View>
      </View>
      
        {/*----------------------- Desices------------------------- */}

          <View style={{backgroundColor:'white',marginVertical:60}}>
          <Text style={styles.ContactSectionText}> Relationship between Organic food and diseases </Text>

            <Image source={require('../assets/images/des.png')} style={{width:350, height:300, marginLeft:'auto',marginRight:'auto'}} />
            <TouchableOpacity
            onPress={() => navigation.navigate('Diseases')}
>
                 <View style={styles.Contactbutton}>  
                    <Text style={styles.OrderNowButtonText}>Read More</Text>
                  </View>
              </TouchableOpacity>
        </View>


        {/*----------------------- start Boxs------------------------- */}

        <View style={{marginVertical:60}}>
          <Text style={styles.BoxText}> WE offer Boxs </Text>
              <Text style={styles.DeliverySectionText1}>We have three types of boxs larg, medium, and small box with collection of organic products  </Text>
          <View style={{flexDirection:'row'}}>
                <Image source={require('../assets/images/box.jpg')} style={{width:200, height:200, marginHorizontal: 20, }} />
                <TouchableOpacity 
                            onPress={() => navigation.navigate('Boxs')}
>
                 <View style={styles.Boxtbutton}>  
                    <Text style={styles.OrderNowButtonText}>Show More</Text>
                  </View>
              </TouchableOpacity>
          </View>

          
        </View>
        
        {/*----------------------- start Doctor------------------------- */}
          <View style={{backgroundColor:'white',marginVertical:50}}>
        
          <Text style={styles.ContactSectionText}> Tell me your problem and I will tell you the solution</Text>

            <Image source={require('../assets/images/doctor1.png')} style={{width:350, height:300, marginLeft:'auto',marginRight:'auto'}} />
            <TouchableOpacity
             onPress={()=>sendWhatsApp()}
            >
              <View style={styles.Contactbutton}>  
                  <Text style={styles.OrderNowButtonText}>Contact us</Text>
                  </View>
              </TouchableOpacity>
        </View>
        {/*----------------------- End aboutus------------------------- */}





        {/*----------------------- Start Delivery section------------------------- */}
        <View style={{backgroundColor:'white',marginVertical:50}}>
        
          <Text style={styles.DeliverySectionText}>We will reach you </Text>
          <Text style={styles.DeliverySectionText1}>Your favorite organic food delivered in Egypt. A wide organic food variety Hungry? </Text>
            
            <Image source={require('../assets/images/order.png')} style={{width:400, height:300, marginTop:-28}} resizeMode="center"/>
            <TouchableOpacity
                            onPress={() => navigation.navigate('Allproduct')}

            >
                 <View style={styles.OrderNowbutton}>  
                    <Text style={styles.OrderNowButtonText}>Order Now</Text>
                  </View>
            </TouchableOpacity>
        </View>
        {/*----------------------- End Delivery section--------------------------- */}


      </ScrollView>





      <View style={{flexDirection:'row',padding:16, backgroundColor:"#eee",marginVertical:10}}>
          <Image source={require('../assets/images/house.png')} style={{width:26, height:26,marginHorizontal:35}}/>
          <Image source={require('../assets/images/love.png')}style={{width:26, height:26,marginHorizontal:30}}/>
          <Image source={require('../assets/images/shopping-cart.png')}style={{width:26, height:26,marginHorizontal:30}}/>
          <Image source={require('../assets/images/user.png')}style={{width:26, height:26,marginHorizontal:30}}/>
      </View>


    </View>            
);
}

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    marginTop: 30,
  },
  InputContainer:{
    width: '70%',
      backgroundColor: "#eee",
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 30,
      paddingHorizontal: 8,
      borderRadius: 12,
  },
  CategoryText: {
    fontSize:20,
    fontWeight: 'bold',
    color: '#78A206',
    paddingHorizontal: 32,
    marginVertical: 22,
  },
  ImgeCategoriStyle: {
    marginHorizontal: 30,
    width:150,
    height: 200,
    borderRadius: 20,
  },
  image: {
    width:150,
    height:150,
    borderRadius: 20,
  },
  buttonCategoryView: {
    backgroundColor: "#78A206",
    width: 120,
    height: 40,
    borderRadius: 20,
    marginTop: -20,
    marginHorizontal: 15,
  },
  FilterButton: {
    color: "white",
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    marginTop:5,
    fontSize: 18,
  },
  BoxText:{
    fontSize:20,
    fontWeight: 'bold',
    paddingHorizontal: 32,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  Boxtbutton: {
    backgroundColor: "#78A206",
    width: 120,
    height: 40,
    borderRadius: 20,
    marginTop: 90,
    marginHorizontal: 35,
    borderColor: "#78A206",
 
  },
  DeliverySectionText:{
    fontWeight:'bold',
    fontSize:22,
    marginTop: 40,
    color:"#000",
    textAlign:'center'
  },
  DeliverySectionText1:{
      marginHorizontal: 35,
      marginVertical:30,
      textAlign: "center",
      marginTop: 4,
      opacity: 0.4,
      fontWeight: 'bold',
  },
  OrderNowbutton: {
    backgroundColor: "#78A206",
    width: 120,
    height: 40,
    marginLeft:'auto',
    marginRight: 'auto',
    borderColor: "#78A206",
    borderRadius: 24,

  },
  ContactSectionText:{
    fontWeight:'bold',
    fontSize:20,
    marginTop: 40,
    marginBottom:20,
    color:"#000",
    textAlign:'center',
    marginHorizontal: 40
  },
  Contactbutton: {
    backgroundColor: "#78A206",
    width: 120,
    height: 40,
    marginLeft:'auto',
    marginRight: 'auto',
    borderColor: "#78A206",
    borderRadius: 24,
    marginTop: 20,
  },
  OrderNowButtonText: {
    color: 'white',
    fontSize:16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 7,
  },
  DisesSectionText: {
    fontWeight:'bold',
    fontSize:22,
    marginTop: 40,
    color:"#000",
    textAlign:'center',
  }
});

export default HomePage;