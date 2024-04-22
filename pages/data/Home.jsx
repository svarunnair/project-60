import React, { useState } from 'react'
import { Button, Dimensions, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import Destination from '../components/Destination'
import { Icon, color } from '@rneui/base'
import { RadioButton } from 'react-native-paper';


function Home() {
  
  const [checked, setChecked] = useState('first');
  return (
    <View style={styles.container}>

    <ScrollView>
       <View>
        <Text>Hi Karthik</Text>
        <View style={styles.key} >
          <Text style={styles.title}>Where Tou Wanna Go?</Text>
          <Icon   type='ionicon' name='notifications-outline'></Icon>

        </View>
         
       </View>

<View style={styles.wrap}>
       <TextInput placeholder='Search' style={styles.inputOne} ></TextInput>
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
          <Icon type='ionicon' name='car-outline'></Icon>
          <Text>Car</Text>
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
           <TextInput placeholder="To" style={styles.input} ></TextInput>
             <TextInput placeholder="Date"  style={styles.input} ></TextInput>
               <TextInput placeholder="Travel Type" style={styles.input} ></TextInput>
                 <TextInput placeholder="Room & Guest" style={styles.input} ></TextInput>
                 <View style={styles.btnWrap} >
<Text style={styles.btn}>Seacrch</Text>
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