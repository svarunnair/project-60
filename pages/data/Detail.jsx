import React from 'react'
import { Text, View } from 'react-native'

function Detail({route}) {
    const { id } = route.params;

  console.log("ID:", id);
 
   

  return (
    <View>
        <Text>
            Detail page
           
        </Text>
    </View>
  )
}

export default Detail