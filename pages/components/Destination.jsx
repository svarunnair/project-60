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
                  <Image style={styles.imgOne} source={{uri:"data:image/jpeg;base64,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"}}/>

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
 
    backgroundColor:"#FFF5EE"
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