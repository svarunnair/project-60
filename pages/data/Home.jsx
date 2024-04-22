import React from 'react'
import { Button, Dimensions, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import Destination from '../components/Destination'


function Home() {
  return (
    <View style={styles.container}>

    <ScrollView>
       <View>
        <Text>Hi Karthik</Text>
         <Text>Where Tou Wanna Go?</Text>
       </View>

       <TextInput style={styles.input} ></TextInput>

       <View style={styles.icon}>
       <View style={styles.iconBox}></View>
        <View style={styles.iconBox}></View>
         <View style={styles.iconBox}></View>
          <View style={styles.iconBox}></View>

       </View>

       <View style={styles.mid}>
        <Text style={styles.midText}> School Students</Text>
         <Text style={styles.midText}> Collage Students</Text>
          <Text style={styles.midText}> Corporate</Text>
       </View>


         <TextInput style={styles.input} ></TextInput>
           <TextInput style={styles.input} ></TextInput>
             <TextInput  style={styles.input} ></TextInput>
               <TextInput style={styles.input} ></TextInput>
                 <TextInput style={styles.input} ></TextInput>
                 <Button title='Seacrch'></Button>

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
    padding:10,
    gap:20,
  },
  scroll:{
    flexDirection:"column",
    gap:20,
    borderWidth:2,
    padding:10
  },
  One:{
    borderWidth:2,
    height:100,
  },
  temp:{
    flexDirection:"row",

  },
  tempOne:{
    width:"50%",
    borderWidth:2,
    height:300,
  }
  ,tempTwo:{
    borderWidth:2,
    width:"50%",
    borderColor:"red"
  },
  in:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  destination:{
    borderWidth:2,
    height:400,
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
    marginTop:10
  },
  icon:{
    flexDirection:"row",
    borderWidth:2,
    height:80,
    padding:10,
    marginTop:10,
    marginBottom:10,
    justifyContent:"space-between"
  }
})
export default Home