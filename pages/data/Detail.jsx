import React, { useEffect } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/action';

function Detail({route}) {
    const { id } = route.params;

  console.log("ID:", id);
  console.log("object")
 
  const detail=useSelector((store)=>store.data.dataGet)
  const dispatch=useDispatch()

  console.log("detail............",detail)

  const showDetail=detail.filter((item)=>item.name===id)

  console.log("filter........",showDetail)
  useEffect(()=>{
    dispatch(getData())
  },[])
   

  return (
    <View style={style.container}>
        <Text style={style.txt}>Details</Text>

            <View style={style.inner}>
            {showDetail.map((item)=>(
              <View style={style.map}>
                <Image source={{uri:item.image}}  style={style.img}/>
                <Text style={style.name}>{item.name}</Text>
                <Text>Price : ₹ {item.price}.00</Text>
                 <Text>Rating : ₹ {item.rate}</Text>
              </View>
            ))}
             </View>

    </View>
  )
}

const screenHeight = Dimensions.get('window').height;

const style=StyleSheet.create({
  container:{

    height:screenHeight,
    flexDirection:"column",
   
    alignItems:"center",
    padding:20,
  },
inner:{

},
map:{
padding:10,
gap:10
},
name:{
  fontSize:22,
  fontWeight:"500",
  color:"grey",
},
txt:{
  fontWeight:"800",
  marginBottom:20,
},
img:{
  width:330,
  height:330,
  borderRadius:20,

}
})


export default Detail