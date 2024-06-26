import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/base'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'

function Verification() {
   const [otp, setOtp] = useState('');
    const [otp2, setOtp2] = useState('');
     const [otp3, setOtp3] = useState('');
      const [otp4, setOtp4] = useState('');

  const navigation=useNavigation()

  if(otp!==""&&otp2!==""&&otp3!==""&&otp4!==""){
    navigation.navigate("Home")
  }

  const handleOtpChange = (text) => {
    if (text.length <= 1) {
      setOtp(text); 
    }
  };
  const handleOtpChange2 = (text) => {
    if (text.length <= 1) {
      setOtp2(text); 
    }
  };
  const handleOtpChange3 = (text) => {
    if (text.length <= 1) {
      setOtp3(text); 
    }
  };
  const handleOtpChange4 = (text) => {
    if (text.length <= 1) {
      setOtp4(text); 
    }
  };

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
   <Image style={styles.img} source={{uri:"https://t3.ftcdn.net/jpg/05/22/42/06/360_F_522420661_5kiI2AiF3pOCgUwl4hveh88dAZDaD9Ol.jpg"}}/>
<Text style={styles.text}>Enter Verification code</Text>
<Text style={styles.textOne}>We have just sent a verification code to your mobile number</Text>
<View style={styles.input}>
  <TextInput value={otp}
        onChangeText={handleOtpChange}
        maxLength={1} 
        keyboardType="numeric" style={styles.otp}></TextInput>
   <TextInput value={otp2}
        onChangeText={handleOtpChange2}
        maxLength={1} 
        keyboardType="numeric"  style={styles.otp}></TextInput>
    <TextInput value={otp3}
        onChangeText={handleOtpChange3}
        maxLength={1} 
        keyboardType="numeric"  style={styles.otp}></TextInput>
     <TextInput value={otp4}
        onChangeText={handleOtpChange4}
        maxLength={1} 
        keyboardType="numeric"   style={styles.otp}></TextInput>
</View>
<Text style={styles.code}>Send the code again</Text>
   </View>
    </View>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    padding:0,
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
    justifyContent:"center",
    flexDirection:"row",
    alignItems:"center",
    textAlign:"center",
    borderRadius:10,
  }
  ,
  img:{
    width:250,
    height:200,
  },
  icon:{
    flexDirection:"row",
    padding:20
  }
})

export default Verification