import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to About screen</Text>
    </View>
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