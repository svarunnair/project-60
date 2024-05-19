import React, { useEffect, useState } from 'react'
import { View ,Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../redux/action'
import { TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

function Search() {

  
  const searchData=useSelector((store)=>store.data.dataGet)
  const [search, setSearch] = useState([])
  const [value,setValue]=useState([])
  const dispatch=useDispatch()
  const navigation=useNavigation()

console.log("value")

  const handleChange=(value)=>{
   let searchValue = search.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });

setValue(searchValue)
if(value===""){
setValue(search)
}
  }

  
   const handleImg = (id) => {
    console.log("NAvId...",id)
  navigation.navigate("Detail", { id: id });

};

    useEffect(()=>{
      dispatch(getData())
    },[])

    console.log("Main.......",search)


useEffect(()=>{
setSearch(searchData)
setValue(searchData)
},[searchData])


  return (
    <View style={styles.content}>
        <Text style={styles.head}>Search Place</Text>
        <TextInput onChangeText={handleChange} style={styles.input} placeholder='type here...'/>

        <ScrollView style={styles.data}>

        {value.map((item)=>(
          <View style={styles.inner}>
          <TouchableOpacity onPress={()=>handleImg(item.name)}>
         <Image source={{uri:item.image}} style={styles.image}/>
         </TouchableOpacity>
         <View style={styles.wrap}>
           <Text style={styles.name}>{item.name}</Text> 
              <Text style={styles.name}>{item.id}</Text> 
            <Text style={styles.star}> {item.rate} ☆</Text>
         </View>
         <Text style={styles.price}>₹ {item.price}.00</Text>
          </View>
        ))}

        </ScrollView>
      
        
    </View>
  )
}
const styles=StyleSheet.create({
  content:{
    borderWidth:2,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    padding:20,
  },
  wrap:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  image:{
    width:"100%",
    height:200,
  },
  star:{
    color:"blue",
  },
  name:{
    fontSize:15,
    fontWeight:"700",
  },
  price:{
    color:"grey",
  },
  input:{
    backgroundColor:"white",
    borderWidth:1,
    width:"100%",
    marginTop:10,
  },
  head:{
    fontWeight:"500",
    fontSize:20,
    color:"grey"
  },
  inner:{
   

  },
  data:{
  
    width:"100%",
    marginTop:20,
    marginBottom:70,
  }
})


export default Search