import React from 'react'
import { Button, Dimensions, Image, StyleSheet, Text, View } from 'react-native'

function Cards() {
  return (
    <View style={styles.container}>
    <View style={styles.inner}>
        <Text style={styles.off}>Best offer</Text>
        <View style={styles.box}>
        <Image style={styles.img} source={{ uri: 'https://s3-alpha-sig.figma.com/img/b41c/7bdf/a42cf2de39ab8d7ce63a3f1f812b4cdc?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aM~Go-nM1FLPpZV3Hn5s1T31lymJK8kOfWEUy0NcPASIXAY7XQ3y78T3WhPDLaMkkCY97J4hGkj8hxdDlgvgSMLvtnVJDN7S5e91wLhjBnU3LGZo5B5Uq-PLXXiGLkaFA3Q7F1Ufn9NTSVCm7BMcsOLFD-jSxuOkUneTvU7b9M0~qJQ8lJYSHvXiuSv-Qd2PuH4wrt~zE536tOJcYCK2LaZ1jpNMY6h2yOoKo1umTXpKsndxHghlaCMIIiC2h91EL5MCm3GWphwNSa9FJY0tLZpA3qm1QoRvPItnFKcH-~QvLa15mPLja5bBrrkHrd02Wuj-Nol5K9-oM3-4b~qg~Q__' }}/>
        <View style={styles.box1} >
            <Text style={styles.head} >Amazing goa</Text>
            <Button title='3d'></Button>
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
             <Text style={styles.boxtext}>₹ 24,589/Person</Text> 
         <Text style={styles.boxtext}>Total Price 48,988</Text>  
        </View>

        </View>

        <View style={styles.conc}>
        <Text style={styles.final}>Extra Rs 5,898 off. Use Code CAPITALHUB</Text>
        </View>
        </View>
    </View>

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