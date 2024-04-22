import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/base'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'

function Verification() {

  const navigation=useNavigation()

  const handleRecent=()=>{
    navigation.navigate("Signin")
  }
      
  
  return (
    <View>
    <TouchableOpacity onPress={handleRecent}>
    <Icon style={styles.icon}  type='ionicon' name='arrow-back-outline'></Icon>
    </TouchableOpacity>
    <View style={styles.container}>
   
   <View style={styles.inner}>
   <Image style={styles.img} source={{uri:"https://s3-alpha-sig.figma.com/img/0c62/a75e/482768c5fe484a70f254be682002a994?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FpT09Hy~rAjLsSUkVRCWRyyx-8yOxhR0DHhLKKqQOFNQ2LWVCuueegPvSNBxlFybH8C9oQT4MfoUVWvcYtONljrCQK6W4gtSZBDFSxP4n88bE3I8VoBgIoz2hH8BHX7EPx6GeFiUgA91JSMTH7cm8hfqVt5vFOsuPB9blveNtcnVFzonsgUniyGVbWGJwLo6fP1Xdiwfiq~lO3uZ8u30jjC3~QI8lUZpDNSVwpofE5ptf~lPvaYJTYD7tLQKjXteBHJWzfXyh1XHabDZ8E-jW9Bdbv0fAPKTSdVmi3MiEgeXZwL9Ma~MTcjmj4wwGmg-mmSrR4luQL0LyvObEjYZ2g__"}}/>
<Text style={styles.text}>Enter Verification code</Text>
<Text style={styles.textOne}>We have just sent a verification code to your mobile number</Text>
<View style={styles.input}>
  <TextInput style={styles.otp}></TextInput>
   <TextInput style={styles.otp}></TextInput>
    <TextInput style={styles.otp}></TextInput>
     <TextInput style={styles.otp}></TextInput>
</View>
<Text style={styles.code}>Send the code again</Text>
   </View>
    </View>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    padding:30,
   
  },
  code:{
    color:"blue",
    fontSize:12,
    marginTop:30,
  },
  inner:{
    marginTop:60,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"

  },
 
  input:{
    flexDirection:"row",
    justifyContent:"space-between",
    gap:4,
    marginTop:10,
  },
  text:{
    fontSize:20,
    fontFamily:"700",
  },
  textOne:{
    fontSize:12,
  },
  otp:{
    borderWidth:2,
    height:50,
    width:50,
    borderRadius:10,
  }
  ,
  img:{
    width:300,
    height:300,
  },
  icon:{
    flexDirection:"row",
    padding:20
  }
})

export default Verification