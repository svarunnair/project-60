import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Button, Image, ImageComponent, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

function Signin() {
  const navigation=useNavigation()
  const [num,setNum]=useState("")
  const [user,setUser]=useState("")

  console.log("num",num)
  
  const handleSign=async()=>{
    if(num.length!==10){
      alert("Enter valid mobile number")
    }
     if(num===""){
    alert("Enter valid mobile number")
  }
  if(user===""){
    alert("Kindly enter user name")
  }
    else{
 navigation.navigate("Verification")
 await AsyncStorage.setItem("user",user)

    }
   
  }

  const handleMobile=(e)=>{
    setNum(e)
  }

  const handleUser=(e)=>{
    setUser(e)
  }

 

  console.log("value.......",num)

  return (
    <View style={styles.container}>
    <View style={styles.inner}>

    <Image style={styles.logo} source={{uri:"https://e7.pngegg.com/pngimages/255/741/png-clipart-busonlineticket-discounts-and-allowances-hotel-bus-blue-logo-thumbnail.png"}}/>

<Text style={styles.title}>Welcome YesGOBus</Text>
<Text> Signin with your mobile number</Text>

<View style={styles.input} >
  <TextInput  keyboardType="text" placeholder='User name' onChangeText={handleUser}  />
</View>

<View style={styles.input} >
<Text style={styles.text} >+91 | </Text>
  <TextInput  keyboardType="numeric" placeholder='Mobile number' onChangeText={handleMobile}  />
</View>



<View style={styles.hr} >
 <View style={styles.line} />
 <Text>OR</Text>
  <View style={styles.line} />
 </View>
<View style={styles.disc}>
<Image style={styles.ig} source={{uri:"https://cdn-icons-png.flaticon.com/256/124/124010.png"}}/>
  <Text>Continue with Facebook</Text>
</View>
<View style={styles.disc}><Image style={styles.ig} source={{uri:"https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"}}/>
  <Text>Continue with Google</Text>
</View>
<View style={styles.disc}><Image style={styles.ig} source={{uri:"https://i.pinimg.com/736x/65/22/5a/65225ab6d965e5804a632b643e317bf4.jpg"}}/>
  <Text>Continue with Apple</Text>
</View>
<View style={styles.li}>
<Text>I don't have an account.</Text>
<Text style={styles.licolo}>Signup</Text>
</View>

<Pressable style={styles.button} onPress={handleSign} >
      <Text  style={styles.buttonInner}>Go to signin</Text>
  </Pressable>
    </View>
       
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flexDirection: 'column',  
    justifyContent: 'center',  
    alignItems: 'center', 
    padding:10,
  },
  li:{
    flexDirection:"row"
  },
  buttonInner:{
    color:"white",
    textAlign:"center",
  },ig:{
    width:30,
    height:30,
  },
  text:{
    fontWeight:"600"
  },
  licolo:{
    color:"#007AFF"
  },
  line:{
    width: 130,
    borderWidth:1,
    height:1,
    marginTop:8,
  },
  button:{
    borderRadius:20,
    width:200,
    height:40,
    justifyContent:"center",
    backgroundColor:"#007AFF",
   
  },
  disc:{
    width:300,
    height:45,
    borderWidth:2,
    borderRadius:20,
    padding:4,
    flexDirection:"row",
    justifyContent:"center",
    gap:40,
    alignItems:"center",


  },
  hr:{
    flexDirection: 'row',
    gap:10,
  },
  inner:{
    flexDirection: 'column',  
    justifyContent: 'center',  
    alignItems: 'center', 
    padding:10,
    gap:20,
  },
  title:{
    fontSize:20,
    fontWeight:"600"
  },
  input:{
    borderWidth:2,
    flexDirection:"row",
    width:300,
    padding:10,
    height:45,
    borderRadius:20,
  },
  logo:{
    width:200,
    height:100,
    borderRadius:20,
        
  }
})

export default Signin