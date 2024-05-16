import React, { useState } from 'react'
import { Button, Dimensions, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import Destination from '../components/Destination'
import { Icon, color } from '@rneui/base'
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { getData } from '../../redux/action';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';


const mainData=[
    {
        image: "https://www.newworldhotels.com/wp-content/uploads/2014/05/Desktop-NWBJG_Exterior-%E9%85%92%E5%BA%97%E5%A4%96%E8%A7%82%E5%9B%BE.jpg",
    name: "Hotel Himo",
    price: "110",
    rate: "3.4",
    id:"1"
    
    },
    {
       image: "https://static.toiimg.com/img/104753278/Master.jpg",
    name: "Madrid",
    price: "610",
    rate: "4.4",
    id:"2"
    },
    {
       image: "https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgrandgoa-goa/images/overview/hotel-expereince/sustainability.png",
    name: "Yahoo",
    price: "310",
    rate: "3.4",
    id:"3"
    },
    {
      image: "https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgrandgoa-goa/images/overview/hotel-expereince/cuisine.png",
    name: "Beach view",
    price: "2910",
    rate: "4.1",
    id:"4"
    },
    {
      image: "https://www.planetware.com/photos-tiles/best-islands-bora-bora-5.jpg",
    name: "Aziz view",
    price: "5510",
    rate: "4.9",
    id:"5"
    },
    {
      image: "https://www.planetware.com/photos-tiles/usa-best-places-miami-5.jpg",
    name: "Lake view",
    price: "4910",
    rate: "4.4",
    id:"6"
    },

]


function Home() {
  
  const [checked, setChecked] = useState('first');
  const navigation=useNavigation()
  const dispatch=useDispatch()
  const [value,setValue]=useState('')
  const [user,setUser]=useState('')
  
  console.log("user......",user)
  const handleSearch=()=>{
    navigation.navigate("Search")
  }

  const handleRoom=(e)=>{
    console.log("Value..........",e)
    setValue(e)
  }



  const handleBook=async()=>{
    try{
      await AsyncStorage.setItem("Booking",value)
      console.log("Booking Successfull")
    }
    catch(err){
      console.log("err",err)
    }
  }

  const handleCar=()=>{
    navigation.navigate("Car")
  }
  
useEffect(async()=>{
  const name= await AsyncStorage.getItem("user")
  setUser(name)
},[])




  useEffect(()=>{
    dispatch(getData(mainData))
},[])

  return (
    <View style={styles.container}>

    <ScrollView>
       <View>
        <Text style={styles.user}>Hi {user}</Text>
        <View style={styles.key} >
          <Text style={styles.title}>Where Tou Wanna Go?</Text>
          <Icon   type='ionicon' name='notifications-outline'></Icon>

        </View>
         
       </View>

<View style={styles.wrap}>
       <TextInput placeholder='Search' style={styles.inputOne} onPressIn={handleSearch} ></TextInput>
         <Icon color={"white"} style={styles.search} type='ionicon' name='search-outline'></Icon>
       </View>
       <View style={styles.icon}>
       <View  style={styles.iconBoxOne}>
      <Icon color={"white"} type='ionicon' name='images-outline'></Icon>
      <Text style={styles.txt}>Food</Text>
       </View>
        <View style={styles.iconBox}>
          <Icon type='ionicon' name='bus-outline'></Icon>
          <Text>Bus</Text>
        </View>
         <View style={styles.iconBox}>
          <Icon onPress={handleCar} type='ionicon' name='car-outline'></Icon>
          <Text >Car</Text>
         </View>
          <View style={styles.iconBox}>
            <Icon type='ionicon' name='file-tray-stacked-outline'></Icon>
            <Text>Home</Text>
          </View>

       </View>

       <View style={styles.mid}>
       <View style={styles.midin}>
      
        <Text style={styles.midText}> School Students</Text>
      
         <Text style={styles.midText}> Collage Students</Text>
       
          <Text style={styles.midText}> Corporate</Text>

          </View>
       </View>


         <TextInput placeholder="From" style={styles.input} ></TextInput>
           <TextInput placeholder="To" style={styles.input}></TextInput>
             <TextInput placeholder="Date" type="date"  style={styles.input} ></TextInput>
               
               <TextInput placeholder="Travel Type" style={styles.input} ></TextInput>
                 <TextInput placeholder="Room & Guest" style={styles.input} onChangeText={handleRoom}></TextInput>
                 <View style={styles.btnWrap} >
<Text style={styles.btn} onPress={handleBook}>Book</Text>
                 </View>
                 

<ScrollView style={styles.scroll}>

     <Destination/>
                
                 </ScrollView> 
               
            
</ScrollView>

    </View>
  )
}
const deviceWidth=Math.round(Dimensions.get("window").width)

const styles=StyleSheet.create({
  container:{
    padding:15,
    gap:20,
  },
  txt:{
  color:"white"
  }
,
key:{
  flexDirection:"row",
  justifyContent:"space-between"
},
  scroll:{
    flexDirection:"column",
    gap:20,
    padding:10
  },
  wrap:{
    flexDirection:"row",
    gap:1,
    

  },
  footer:{
    borderWidth:2,
    width:deviceWidth,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  user:{
    fontSize:12,
    fontWeight:"500"
  },
  btn:{
 padding:4,
    justifyContent:"center",
    textAlign:"center",
    borderRadius:10,
    color:"white",
    backgroundColor:"#007AFF",
    height:30,
    width:300,


  },
  search:{
    marginTop:20,
    borderRadius:6,
    padding:3,
    backgroundColor:"#145DCA"

  },
  btnWrap:{
    justifyContent:"center",
    alignItems:"center"
  },
  title:{
    fontSize:20,
    fontWeight:"600"
  },
  One:{
   
    height:100,
  },
  temp:{
    flexDirection:"row",

  },
  tempOne:{
    width:"50%",
   
    height:300,
  }
  ,tempTwo:{
   
    width:"50%",
    borderColor:"red"
  },
  in:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  destination:{

    height:400,
  },
  mid:{
    flexDirection:"row",
    backgroundColor:"black",
    height:35,
    borderRadius:10,
    justifyContent:"center",
    padding:8
  },
  midin:{
    flexDirection:"row",
    gap:30,
  },
  iconBox:{
    height:60,
    width:50,
    borderRadius:10,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#EAEAEA"
  },
  iconBoxOne:{
    backgroundColor:"#145DCA",
    height:60,
    width:50,
    borderRadius:10,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  },
  midText:{
    color:"white",
    fontSize:10,

  },
  input:{
    borderWidth:.4,
    height:50,
    borderRadius:20,
    marginTop:10,
    padding:10,
    marginBottom:10,
  },
   inputOne:{
    borderWidth:.4,
    height:50,
    width:300,
    padding:10,

    borderRadius:20,
    marginTop:10
  },
  icon:{
    flexDirection:"row",
    height:80,
    padding:10,
    marginTop:10,
    marginBottom:10,
    justifyContent:"space-between"
  }
})
export default Home