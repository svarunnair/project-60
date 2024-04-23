import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

function Signin() {
  const navigation=useNavigation()
  const [num,setNum]=useState("")
  
  const handleSign=()=>{
    if(num.length!==10){
      alert("Enter valid mobile number")
    }
    else{
 navigation.navigate("Verification")
    }
   
  }

  const handleMobile=(e)=>{
    setNum(e)
  }

  if(num===""){
    alert("Enter valid mobile number")
  }

  console.log("value.......",num)

  return (
    <View style={styles.container}>
    <View style={styles.inner}>

    <Image style={styles.logo} source={{uri:"https://s3-alpha-sig.figma.com/img/4c9c/2945/17a4ebd6d800171a529a0469c77eb15f?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=agKh2mq-2QD9-cysneuHiqxLsx1GKL7YsEE4ATan797EvPOFOxs2iFbh68W2VECfxkj5TNy6SwA4MyGbvONxNkFUjl1SaTXhV4bkp9Zd4oxv9d001zF-iGMQBjYlpfCqAEFGxugm~PmAPbx7xHRS93Mb7jZg5PdbIw3rAHDlbgaN4PWz25FAWtYwUh2GGUNRDvSi6oqwbtWd2qlSW8k-YTHIQS0uEQctMueoQI-ZQYS66MD0x8cbGNCI5073mhkqiyXSMkWPgWS~wlJ8nplGu4wgptSNRanY5-tJYSaAo5LcE7NvD1m2hb0sAhhygYhMbYf7z~O5-oKKl6Ua-Hpyxg__"}}/>

<Text style={styles.title}>Welcome YesGOBus</Text>
<Text> Signin with your mobile number</Text>

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
<Image style={styles.ig} source={{uri:"https://s3-alpha-sig.figma.com/img/d04b/0267/2595cc4c1af2ee912306f37d44fbd494?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lm1QXlU-QrbfBD7dGzK0SOmhIATudPW7lLoYj8OnsdY85W2dl9b3NS3RXtj2mezABVVGiCBUIQemZelABVtunP-f1REAMLGPHGjVDafJZ2Ln~hJ~fSsVyrAX2aduZogrVF6KhmMmgXItjM9cSNk1gk4izIkcK-UzdPwz1-LVp7i5J2e4xIJy8GXZqBUd0WNM-3tZCBMlgPF48~MBiNi4DQtdOzWiDKIBlwfqfHhw1IDFLFZFOFHpmZFoKC98T5XYdDTjsoHrtzheMmiIY4YdKdA-RuDxVAQYhVEX7xwcenPBQLsseFlyYOfcog7-axkbrsr47YnW2A6TCKhr~WTgpA__"}}/>
  <Text>Continue with Facebook</Text>
</View>
<View style={styles.disc}><Image style={styles.ig} source={{uri:"https://s3-alpha-sig.figma.com/img/bbc0/0dd0/ed24bd5e244df9812c3c32e540eb6fb4?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MjxwwiRe26Vm4l1j-xmKwO-MdofzhCKkjKzokwApVZz0k9WvyeP5AVI4qQ38sQGSjoocURS-8tVZEqvXxc6W1p4IbmrWWEgnJlUj8KFMj2EQtjZUi~nD0q5iLQfrUUqPpJj3Vo7DBibmxKZtDHNk76-icM~yOGIKiC004Y7BAxlyMWX-1XQZSDQewKczJ4VTx68O0G6ZYdSurkC8vl23GzsnuoGZj7k43PEJqxXbbOLdf7NMlzBD7gO3R7BzjuZbg38CIyOW7HClEP59H-JFoM3sprfzBus3oltKIqQZ4LoL8mYmKEiOuoJEm72atLdOl0c2didP9UsfMvTW6jKDow__"}}/>
  <Text>Continue with Google</Text>
</View>
<View style={styles.disc}><Image style={styles.ig} source={{uri:"https://s3-alpha-sig.figma.com/img/d6cd/5666/8298d1be56a8ba51644d10f35ecbee71?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KRbIKQMAQSuHQVkl94vUTh5PBzjAiqp3j~iCKUwcj4W3oQrQzmKt3~qxgVZ-RHAcrKlOVrtAp-mXYCEpd3fQa3XFZc2ZcqjObdaqKRkkWkvUFEztT93nQesjYlV0e5JS2EzAeYnQFUmX7rlaDMtvbh8z1X6xV3EH2zXW9iCrgR1AJGSaMvCQSjAslDwIYVOjldd~3TwLCcojPjIMQVGa5sQ2SCzJmL5VEL0TzqZRw0CYxkEBQ4UtBQ7IhE223fTHG-INCBOmnUXC4Dpo8~lWYEi1d2OyFGJPP0KPYZU9ZhVtkWHjd~c7WDTeZHzmX3taXxm7rLm7t9cDNelO3frndw__"}}/>
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
    padding:30,
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
    width:300,
    height:100,
    
  }
})

export default Signin