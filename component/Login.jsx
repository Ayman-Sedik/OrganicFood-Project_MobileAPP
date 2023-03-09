import React, {useState} from 'react';
import {Text, View, Image,TextInput, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import axios from 'axios';



const Login = ({navigation}) => {
   const[validation,setValidation]=useState(true)
  const [validationError,setValidationError]=useState("")

    const [email ,setEmail] = useState("");
    const [password ,setPassword] = useState("");
    
    
  async function postData(){

 let {data} = await axios.post('http://192.168.1.15:5000/login', {
 
    email:email,
    password:password,
})
console.log(data)
if(data != 'user exists'){
  setValidationError(data)
  setValidation(false)
}else{
  navigation.navigate("HomePage")
}

 };
 let showError = ()=>{
  if(validationError =="Email is not correct"){
    return <Text style={{textAlign:"center",marginTop:20,color:"red"}}>Email is not correct</Text>
  }else{
        return <Text style={{textAlign:"center",marginTop:20,color:"red"}}>password is not correct</Text>

  }
 }


console.log(validationError);


    return(
      <View style={{backgroundColor:"#FFF",height:"100%"}}>
                   <StatusBar backgroundColor='black' style="light" />

        <Image source={require('../assets/images/login.jpg')}
          style={{width: "100%",height: "40%", marginVertical:20}}
        />
        <Text style={{fontSize: 35, fontWeight: 'bold', textAlign:"center"}}>
          Welcome Back
        </Text>
        <Text style={styles.loginToAccountText}>
            Login to your existant account
        </Text>
{/* email */}

        <View style={styles.InputContainer}>
            <MaterialIcons name="email" size={24} color= "#78A206" />
            <TextInput
              style={{paddingHorizontal:10}}
              placeholder=" Enter Your Email"
              name="email"
              value={email}
              onChangeText={ (text) =>
               { setEmail(text)
               setValidation(true)
              setValidationError("")}
}            />

           
        </View>
                            {validationError == "Email is not correct"&&validation==false ?showError():""}


        
{/* password */}
        <View style={styles.InputContainer}>
            <MaterialIcons name="lock" size={24} color= "#78A206" />
            <TextInput
              style={{paddingHorizontal:10}}
              placeholder='Enter Your Password'
              name="password"
              value={password}

              onChangeText={ (text) =>
               { setPassword(text)
               setValidation(true)
              setValidationError("")}
}
              secureTextEntry
              
            />

            
        </View>
                                    {validationError == "Password is not correct"&&validation==false ?showError():""}



{/* login button */}
          <TouchableOpacity onPress={() =>
          {
          postData()
        
        
        }
          }>
            <View style={styles.LoginButton}>
              <Text style={styles.LoginButtonText}> Login </Text>
            </View>

          </TouchableOpacity>
          

          <Text style={styles.DontHaveAcc}>
                You don't have an account? 
                <Text onPress={() => navigation.navigate('SignUp')}
                 style={{
                  color: "#78A206",
                  fontWeight: 'bold',
                }}> Sing up
                </Text>
            </Text>
      </View>
    )
  }
// }


const styles = StyleSheet.create({
  InputContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 55,
      borderWidth: 2,
      marginTop:15,
      paddingHorizontal: 10,
      borderColor: "#78A206",
      borderRadius: 24,
      paddingVertical: 8,
  },
  loginToAccountText: {
      marginHorizontal: 35,
      textAlign: "center",
      marginTop: 5,
      opacity: 0.4,
      fontWeight: 'bold',
  },
  ErrorEmailMssg : {
    color: "red",
    fontSize: 16,
  },
  LoginButton: {
      marginHorizontal: 55,
      alignItems: 'center',
      marginTop: 30,
      backgroundColor: "#78A206",
      paddingVertical: 10,
      borderRadius: 24,
  },
  LoginButtonText: {
      color: "white",
      fontWeight: 'bold',
      fontSize: 16,
  },
  DontHaveAcc: {
      color:"black",
      paddingVertical: 30,
      marginTop: 20,
      alignSelf:"center",
      fontSize: 16,
  },
})
export default Login;