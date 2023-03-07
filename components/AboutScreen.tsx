import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'



const AboutScreen = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to About screen</Text>
    </View>
    </ScrollView>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFFFFF",
        justifyContent:"center",
        alignItems:"center",
        height:"100%"
    },
    text:{
        textAlign:"center",
        color:"#000000"
       
    }
})