import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function Destination() {
    const naviagtion=useNavigation()
    const handleSee=()=>{
        naviagtion.navigate("Booking")
    }
  return (
    <View>
        <View style={styles.destination}>
                 <View style={styles.in}>
 <Text>Popular Destinations</Text>
     <TouchableOpacity onPress={handleSee}>
 <Text>See all</Text>
 </TouchableOpacity>
                 </View>

                 <View style={styles.temp} >
                  <View style={styles.tempOne}>
                  <Image style={styles.imgOne} source={{uri:"https://images.moneycontrol.com/static-mcnews/2021/04/Roof-top-pool-2-taj-goa.jpg?impolicy=website&width=1600&height=900"}}/>

                  </View>
                   <View style={styles.tempTwo}>
                    <View style={styles.One}>
                     <Image style={styles.imgOne} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbXVDUinvKGTg2x_qOY7Tm3zGJJYqKfvljfg&s"}}/>
                    </View>
                     <View style={styles.One}>
                      <Image style={styles.imgOne} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMm22jSK-FU8pxH3l09r-DKtk2vPP838RPJA&s"}}/>
                    </View>
                   </View>
                   
                 </View>
             
                
                 </View>
    </View>
  )
}


const styles=StyleSheet.create({
  container:{
    padding:10,
    gap:20,
  },
  scroll:{
    flexDirection:"column",
    gap:20,
    padding:10
  },
  imgOne:{
    width:"100%",
    height:"100%",
    borderRadius:13,
    
  },
  One:{
    height:100,
  },
  temp:{
    flexDirection:"row",
    padding:2,
    gap:3

  },
  tempOne:{
    width:"50%",
    height:200,
   
  }
  ,tempTwo:{

    width:"50%",

  },
  in:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:4,
  },
  destination:{
 
    backgroundColor:"#EFF8FF"
  },
  mid:{
    flexDirection:"row",
    backgroundColor:"black",
    height:30,
    borderRadius:10,
    justifyContent:"space-between",
    padding:5
  },
  iconBox:{
    height:50,
    width:50,
    borderWidth:2,
    borderRadius:15,
  },
  midText:{
    color:"white",
    fontSize:10,

  },
  input:{
    borderWidth:2,
    height:50,
    borderRadius:20,
    // marginTop:10
  },
  icon:{
    flexDirection:"row",
    borderWidth:2,
    height:80,
    padding:10,
    justifyContent:"space-between"
  }
})

export default Destination