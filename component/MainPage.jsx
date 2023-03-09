import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';


const MainPage = ({navigation}) => {

return (
      <View style={{backgroundColor:"#FFF",height:"100%"}}>
                   <StatusBar backgroundColor='black' style="light" />


          <Image source={require('../assets/images/Hello-rafiki.png')}
            style={{width: "100%",height: "40%", marginVertical: 60}}
          />
          <Text style={{fontSize: 35, fontWeight: 'bold', textAlign:"center"}}>
            Organic Food 
          </Text>
          <Text style={styles.OrganicText}>
             Get connect to the best online market for all organic products.
          </Text>

          <TouchableOpacity>
            <View style={styles.LoginButton}>
              <Text style={styles.LoginButtonText}
              onPress={() => navigation.navigate('Login')}> Login </Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.OrText}>Or create account</Text>
          <TouchableOpacity>
            <View style={styles.SignUpButton}>
              <Text 
                onPress={() => navigation.navigate('SignUp')}
                style={styles.SignButtonText}> 
                Sign up
               </Text>
            </View>
          </TouchableOpacity>
        </View> 
);
}

const styles = StyleSheet.create({

    LoginButton: {
      marginHorizontal: 55,
      alignItems: 'center',
      marginTop: 50,
      backgroundColor: "#78A206",
      paddingVertical: 12,
      borderRadius: 24,
  },
  OrganicText: {
      marginHorizontal: 55,
      textAlign: "center",
      marginTop: 18,
      opacity: 0.4,
      fontWeight: 'bold',
  },
  SignUpButton: {
      marginHorizontal: 55,
      alignItems: 'center',
      marginTop: 25,
      backgroundColor: "#78A206",
      paddingVertical: 12,
      borderRadius: 24,
  },
  LoginButtonText: {
      color: "white",
      fontWeight: 'bold',
      fontSize: 16,
  },
  OrText: {
      textAlign: "center",
      fontWeight: 'bold',
      color: "#F57328",
      opacity: 0.6,
      marginTop:30
  },
  SignButtonText: {
     color: "white",
      fontWeight: 'bold',
      fontSize: 16,
  }

});

export default MainPage;