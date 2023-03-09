import React,{ useState,useEffect } from 'react';
import {Text, View, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, Touchable, StatusBar} from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import axios from 'axios';

const SignUp = ({navigation}) => {

  const [fullName,setFullName]=useState("");
  const [Phone ,setPhone] = useState("");
  const [city ,setCity] = useState("");
  const [email ,setEmail] = useState("");
  const [password ,setPassword] = useState("");
  const [comfirmPassword, setComfirmPassword] = useState("");
  const[validation,setValidation]=useState(true)
  const [validationError,setValidationError]=useState([]);


  

  

 

async function postData(){

 let {data} = await axios.post('http://192.168.1.15:5000/signup', {
 fullname:fullName,
    phone:Phone,
    province:city,
    email:email,
    password:password,
    confirmPassword:comfirmPassword
})
console.log(data)
if(data != 'data correct'){
  setValidationError(data)
  setValidation(false)
}else{
  navigation.navigate("Login")
}

 };
 let showError = (errName ,erorrMsg)=>{
  let error = validationError.filter((err)=>{
    return err.param.includes(errName)
  })
  if(error[0] !== undefined){
    return <Text style={{textAlign:"center",marginTop:20,color:"red"}}>{erorrMsg}</Text>
  }else{
    return ''
  }
 }


console.log(validationError);

 
  
  

    return(
      <View>
                   <StatusBar backgroundColor='black' style="light" />

      
      <ScrollView style={{backgroundColor:"#FFF",height:"100%"}}> 
        <View>
          {/***********************************************image*************************************************************** */}
          <Image
            style={styles.image}
            resizeMode= "center"
            source={require('../assets/images/girlboy.jpg')}
           />
           {/* text */}
            <Text style={{fontSize: 35, fontWeight: 'bold', textAlign:"center"}}>
              Let's Get Started
            </Text>
            <Text style={styles.createAccountText}>
            Create an account to get all features
        </Text>
{/* *******************************************************form ***************************************************/}
          <View style={styles.InputContainer}>
            <MaterialIcons name="person" size={24} color= "#78A206" />
            <TextInput
            onChangeText={(newText) =>{ 
              setFullName(newText)
              setValidation(true)
            } }
              style={{paddingHorizontal:10,height:20}}
              placeholder=" FullName"
              
            />
          </View>

          {validationError.length != 0&&validation==false ?showError('fullname',"invalid fullname"):""}

          {/* *****************************************Phone******************************************************* */}

          <View style={styles.InputContainer}>
            <MaterialIcons name="phone" size={24} color= "#78A206" />
            <TextInput
              onChangeText={(newText) =>{ 
              setPhone(newText)
              setValidation(true)
            } }

              style={{paddingHorizontal:10,height:20}}
              placeholder="Phone"
            />
          </View>
          {validationError.length != 0 &&validation==false ?showError('phone',"invalid phone"):""}
{/* ***********************************************city****************************************** */}
          <View style={styles.InputContainer}>
            <MaterialIcons name="home" size={24} color= "#78A206" />
            <TextInput
               onChangeText={(newText) =>{ 
              setCity(newText)
              setValidation(true)
            } }

              style={{paddingHorizontal:10,height:20}}
              placeholder="City"
            />
          </View>
          {validationError.length != 0 &&validation==false ?showError('province',"invalid province"):""}

{/* ***************************************************email************************************************************* */}
          <View style={styles.InputContainer}>
            <MaterialIcons name="email" size={24} color= "#78A206"/>
            <TextInput
              onChangeText={(newText) =>{ 
              setEmail(newText)
              setValidation(true)
            } }
              style={{paddingHorizontal:10,height:20}}
              placeholder="Email"
            />
          </View>
                                {/* {validationError == "Email already exists" &&validation==false ?<Text style={{textAlign:"center",marginTop:20,color:"red"}}>Email already exists</Text>:""} */}

                      {validationError.length != 0 &&validation==false ?showError('email',"invalid email"):""}

{/* *********************************************************password******************************************************** */}
          <View style={styles.InputContainer}>
            <MaterialIcons name="lock" size={24} color= "#78A206" />
            <TextInput
              onChangeText={(newText) =>{ 
              setPassword(newText)
              setValidation(true)
            } }
              style={{paddingHorizontal:10,height:20}}
              placeholder='Password'
              secureTextEntry={true}
            />
          </View>
          {validationError.length != 0 &&validation==false ?showError('password',"invalid Password"):""}
{/* *************************************************confirm **************************************************/}
          <View style={styles.InputContainer}>
            <MaterialIcons name="lock" size={24} color= "#78A206" />
            <TextInput
            onChangeText={(newText) =>{ 
              setComfirmPassword(newText)
              setValidation(true)
            } }
              style={{paddingHorizontal:10,height:20}}
              placeholder='Confirm Password'
              secureTextEntry={true}
            />

          </View>
                     {validationError.length != 0 &&validation==false?showError('confirmPassword',"invalid confirmPassword"):""}


          {/* signup button  */}
          <TouchableOpacity
          onPress={(e)=>{
            e.preventDefault();
            postData()

          }}
          

          >

            <View style={styles.SignUpButton}>
              <Text style={styles.SignUpButtonText}> Sing up </Text>
            </View>
          </TouchableOpacity>


          {/* Already have account? */}
          <Text style={styles.AlreadyHaveAcc}>
                Already have an account? 
                  <Text style={{ color: "#78A206", fontWeight: 'bold'}} 
                  onPress={() => navigation.navigate('Login')}
                  >
                  Login</Text>
            </Text>

        </View>
      </ScrollView>
      </View>
    )
  }




const styles = StyleSheet.create({
  image:{
        width: '100%',
        height: 200,
        marginVertical: 20 
    },
    createAccountText: {
        marginHorizontal: 35,
        textAlign: "center",
        marginTop: 5,
        opacity: 0.4,
        fontWeight: 'bold',
    },
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
  SignUpButton: {
      marginHorizontal: 55,
      alignItems: 'center',
      marginTop: 30,
      backgroundColor: "#78A206",
      paddingVertical: 10,
      borderRadius: 24,
  },
  SignUpButtonText: {
      color: "white",
      fontWeight: 'bold',
      fontSize: 16,
  },
  AlreadyHaveAcc:{
      color:"black",
      paddingVertical: 30,
      marginTop: 10,
      alignSelf:"center",
      fontSize: 16,
  },
})



export default SignUp;