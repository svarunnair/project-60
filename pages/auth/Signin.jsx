import React from 'react'
import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

function Signin() {
  return (
    <View style={styles.container}>
    <View style={styles.inner}>

    <Image style={styles.logo} source={"https://s3-alpha-sig.figma.com/img/4c9c/2945/17a4ebd6d800171a529a0469c77eb15f?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=agKh2mq-2QD9-cysneuHiqxLsx1GKL7YsEE4ATan797EvPOFOxs2iFbh68W2VECfxkj5TNy6SwA4MyGbvONxNkFUjl1SaTXhV4bkp9Zd4oxv9d001zF-iGMQBjYlpfCqAEFGxugm~PmAPbx7xHRS93Mb7jZg5PdbIw3rAHDlbgaN4PWz25FAWtYwUh2GGUNRDvSi6oqwbtWd2qlSW8k-YTHIQS0uEQctMueoQI-ZQYS66MD0x8cbGNCI5073mhkqiyXSMkWPgWS~wlJ8nplGu4wgptSNRanY5-tJYSaAo5LcE7NvD1m2hb0sAhhygYhMbYf7z~O5-oKKl6Ua-Hpyxg__"}/>

<Text style={styles.title}>Welcome YesGOBus</Text>
<Text> Signin with your mobile number</Text>

<TextInput style={styles.input} />

<View style={styles.hr} >
 <View style={styles.line} />
 <Text>OR</Text>
  <View style={styles.line} />
 </View>
<View style={styles.disc}>
  <Text>Continue with Google</Text>
</View>
<View style={styles.disc}>
  <Text>Continue with Google</Text>
</View>
<View style={styles.disc}>
  <Text>Continue with Google</Text>
</View>
<Text>I don't have an account. Signup</Text>

<Pressable style={styles.button} onPress={()=>navigation.navigate("Verificatio")} >
      <Text style={styles.buttonInner}>Go to signin</Text>
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
  },buttonInner:{
    color:"white",
    textAlign:"center",
  },
  line:{
    width: 100,
    backgroundColor: '#ccc',
    borderWidth:1,
  },
  button:{
    borderRadius:20,
    width:200,
    backgroundColor:"blue",
   
  },
  disc:{
    width:200,
    height:30,
    borderWidth:2,
    borderRadius:20,
    padding:4,
    justifyContent:"center",
    alignItems:"center",


  },
  hr:{
    flexDirection: 'row',
  },
  inner:{
    borderWidth:2,
    flexDirection: 'column',  
    justifyContent: 'center',  
    alignItems: 'center', 
    padding:20,
    gap:20,
  },
  title:{
    fontSize:20,
    fontWeight:"600"
  },
  input:{
    borderWidth:2,
    width:200,
    borderRadius:20,
  },
  logo:{
     borderWidth:2,
     borderColor:"red",
    width:50,
    height:50,
    
  }
})

export default Signin