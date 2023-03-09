import React, {useState} from 'react';
import {Text, View, Image,TextInput, StyleSheet, TouchableOpacity} from 'react-native';

const ShopNow = ({navigation}) => {

return (
      <View style={{backgroundColor:"#FFF",height:"100%"}}>
        <Image source={require('../assets/images/shop.jpg')}
        // resizeMode= "center"
          style={{width: "100%",height: "40%", marginVertical:70}}
        />
        <Text style={{fontSize: 35, textAlign:"center", padding: 20, color:"#78A206"}}>
          Shop Your Daily Necessary
        </Text>


        <TouchableOpacity>
            <View style={styles.ShopButton}>
              <Text style={styles.ShopButtonText}> Shop Now</Text>
            </View>
          </TouchableOpacity>
        </View>
);
}

const styles = StyleSheet.create({
    ShopButton: {
      marginHorizontal: 115,
      alignItems: 'center',
      marginTop: 120,
      backgroundColor: "#78A206",
      paddingVertical: 14,
      borderRadius: 12,
  },
  ShopButtonText: {
      color: "white",
      fontWeight: 'bold',
      fontSize: 16,
  },
})

export default ShopNow;