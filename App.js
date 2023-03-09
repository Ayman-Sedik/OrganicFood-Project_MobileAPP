
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Diseases } from './component/diseases';
import { Heart } from './component/heart';
import { Pressure } from './component/pressure';
import { Diabetes } from './component/diabetes';
import { Hepatitis } from './component/hepatitis';
import { Kidney } from './component/kidney';
import { StyleSheet } from 'react-native';
import { Products } from './component/products';
import { Fruits } from './component/fruits';
import { Herbles } from './component/herbles';
import { Meats } from './component/meats';
import { Milks } from './component/milks';
import { Vegetable } from './component/vegetables';
import MainPage from './component/MainPage';
import Login from './component/Login';
import SignUp from './component/SingUp';
import HomePage from './component/HomePage';
import ShopNow from './component/ShopNow';
import CartProduct from './component/CartProduct';
import { Meals } from './component/Meals';
import { LemonChicken } from './component/LemonChicken';
import { GreenNoodles } from './component/GreenNoodles';
import { AsianEggs } from './component/AsianEggs';
import { SesameBeef } from './component/SesameBeef';
import { Iceberg } from './component/Iceberg';
import { Boxes } from './component/Boxes';
import { LargeBox } from './component/LargeBox';
import { MeduimBox } from './component/MeduimBox';
import { SmallBox } from './component/SmallBox';
import { ContactUs } from './component/ContactUs';
import { Allproduct } from './component/allproduct';


const Stack = createNativeStackNavigator();
export default function App() {

  return (
    

      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
                              <Stack.Screen name="MainPage" component={MainPage} />

                                              <Stack.Screen name="largebox" component={LargeBox} />
                                              <Stack.Screen name="MeduimBox" component={MeduimBox} />
                                              <Stack.Screen name="SmallBox" component={SmallBox} />
                                              <Stack.Screen name="ContactUs" component={ContactUs} />
                                              <Stack.Screen name="Allproduct" component={Allproduct} />


                                      <Stack.Screen name="Boxs" component={Boxes} />

                              <Stack.Screen name="Meals" component={Meals} />


                      <Stack.Screen name='LemonChicken'component={LemonChicken}/>


                      <Stack.Screen name="GreenNoodles" component={GreenNoodles} />
                      <Stack.Screen name="AsianEggs" component={AsianEggs} />
                      <Stack.Screen name="SesameBeef" component={SesameBeef} />
                      <Stack.Screen name="Iceberg" component={Iceberg} />




                      <Stack.Screen name="Login" component={Login} /> 
              <Stack.Screen name="HomePage" component={HomePage} />

              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="CartProduct" component={CartProduct} />
              <Stack.Screen name="ShopNow" component={ShopNow} />




                  <Stack.Screen name="Diseases" component={Diseases} />

          <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Fruits" component={Fruits}/>
        <Stack.Screen name="Herbles" component={Herbles} />
        <Stack.Screen name="Meats" component={Meats} />
        <Stack.Screen name="Milks" component={Milks} />
        <Stack.Screen name="Vegetable" component={Vegetable}/>


          <Stack.Screen name="Heart" component={Heart} />
          <Stack.Screen name="Pressure" component={Pressure} />
          <Stack.Screen name="Diabetes" component={Diabetes} />
          <Stack.Screen name="Hepatitis C" component={Hepatitis} />
          <Stack.Screen name="Kidney" component={Kidney} />
          
        </Stack.Navigator>
      </NavigationContainer>
     




   
  )
}

const styles = StyleSheet.create({
  container: {
   backgroundColor:"white"
  },


});
