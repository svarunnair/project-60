import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from '../pages/auth/Signin';
import Verification from '../pages/auth/Verification';
import Home from '../pages/data/Home';
import Booking from '../pages/data/Booking';
function Routes() {
     const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
         <Stack.Navigator initialRouteName='Signin'
        screenOptions={{
          statusBarColor:"black",
          headerStyle:{
            backgroundColor:"#8FBC8F"
          },
          headerShown:false,
          headerTintColor:"black",
          headerTitleAlign:"center"

        }}>
              <Stack.Screen name="Signin" component={Signin}/>           
              <Stack.Screen name="Verification" component={Verification}/>
              <Stack.Screen name="Home" component={Home}/>
               <Stack.Screen name="Booking" component={Booking}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes