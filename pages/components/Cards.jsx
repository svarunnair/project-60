import React, { useEffect, useState } from 'react'
import { Button, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../redux/store'
import { getData } from '../../redux/action'


const mainData=[
    {
        image: "https://www.newworldhotels.com/wp-content/uploads/2014/05/Desktop-NWBJG_Exterior-%E9%85%92%E5%BA%97%E5%A4%96%E8%A7%82%E5%9B%BE.jpg",
    name: "Hotel Himo",
    price: "110",
    rate: "3.4",
    },
    {
       image: "https://static.toiimg.com/img/104753278/Master.jpg",
    name: "Madrid",
    price: "610",
    rate: "4.4",
    },
    {
       image: "https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgrandgoa-goa/images/overview/hotel-expereince/sustainability.png",
    name: "Yahoo",
    price: "310",
    rate: "3.4",
    },
    {
      image: "https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgrandgoa-goa/images/overview/hotel-expereince/cuisine.png",
    name: "Beach view",
    price: "2910",
    rate: "4.1",
    },
    {
      image: "https://www.planetware.com/photos-tiles/best-islands-bora-bora-5.jpg",
    name: "Aziz view",
    price: "5510",
    rate: "4.9",
    },
    {
      image: "https://www.planetware.com/photos-tiles/usa-best-places-miami-5.jpg",
    name: "Lake view",
    price: "4910",
    rate: "4.4",
    },

]

function Cards(props) {

   
    const dataLength=mainData.length
     props.ondata(dataLength)
     const dispatch=useDispatch()

     const mainDataCard=useSelector((store)=>store.data.dataGet)

     console.log("maindata_Card/....?",mainDataCard)


     useEffect(()=>{
        dispatch(getData())
     },[])

    const [data,setData]=useState(null)
    console.log("data",data)


  return (
    <View style={styles.container}>

    {mainData.map((item)=>(

        <View style={styles.inner}>
        <Text style={styles.off}>Best offer</Text>
        <View style={styles.box}>
        <Image style={styles.img} source={{ uri: item.image}}/>
        <View style={styles.box1} >
            <Text style={styles.head} >{item.name}</Text>
            <Button title={item.rate}></Button>
        </View>
        <View style={styles.boxWrap} >
        <View style={styles.box1}>
        <Text>Round Trip flights</Text>
        <Text>Round Trip flights</Text>
        </View>
         <View style={styles.box1}>
        <Text>Round Trip flights</Text>
        <Text>Round Trip flights</Text>
        </View>
         <View style={styles.box1}>
        <Text>Round Trip flights</Text>
      
        </View>
        </View>
        <View style={styles.last}>
        <View style={styles.last1}> 
        <Text style={styles.boxtext}>This Price is lower than the average price in april</Text> 
    
        </View>
        <View style={styles.last1}>
             <Text style={styles.boxtext}>₹ {item.price}/Person</Text> 
         <Text style={styles.boxtext}>Total Price 48,988</Text>  
        </View>

        </View>

        <View style={styles.conc}>
        <Text style={styles.final}>Extra Rs 5,898 off. Use Code CAPITALHUB</Text>
        </View>
        </View>
    </View>


    ))}
    
    </View>
  )
}
const deviceWidth=Math.round(Dimensions.get("window").width)

const styles=StyleSheet.create({
container:{
 
    padding:20
},
inner:{

},
conc:{
  
    flexDirection:"row",
    justifyContent:"center",
    padding:10,

},
last:{
    flexDirection:"row",
    backgroundColor:"#FFFAF0",
    padding:10,
    
},
head:{
    fontWeight:"700",
    fontSize:18,
},
boxtext:{
    fontSize:12,
    fontWeight:"300"
},
last1:{
    width:"50%",
   

},
off:{
    paddingLeft:20,
    width:90,
    color:"#000080",
    backgroundColor:"#4169E1",
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    padding:3
},
final:{
    fontSize:12,
    fontWeight:"700"
},
boxWrap:{
    padding:10,
    gap:20,
},
box:{
    borderWidth:.4,
    borderColor:"grey",
    borderRadius:20,
    borderTopLeftRadius:0,
  
},
box1:{
    flexDirection:"row",
    justifyContent:"space-between",
  
    alignItems:"center",
},
img:{
    width:"100%",
    height:180,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    borderTopLeftRadius:0,

}

})

export default Cards