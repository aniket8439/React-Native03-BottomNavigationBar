import { StyleSheet, Text, View } from 'react-native'
import React,{Component} from 'react'

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Home screen</Text>
    </View>
  )
}

export default HomeScreen

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