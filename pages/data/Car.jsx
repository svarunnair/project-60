import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { View ,Text, StyleSheet} from 'react-native'

function Car() {

    const [data,setData]=useState('')

    console.log("data.....",data)

    const retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem("Booking");
    if (value !== null) {
      console.log("Booking retrieved successfully:", value);
      setData(value)
    } else {
      console.log("No booking data found.");
    }
  } catch (error) {
    console.error("Error retrieving booking:", error);
  }
}


  return (
    <View style={styles.container}>
        <Text onPress={retrieveData}>car</Text>
        <Text>{data}</Text>
        <View >


        </View>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    padding:10,
    gap:20,

    
  },
})

export default Car