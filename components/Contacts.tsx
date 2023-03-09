import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Image } from '@rneui/base'


const Contacts = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink)
  }
  return (
    <View style={styles.container}>
      <LinearGradient
          colors={['#538FFB', '#5B54FA', '#538FFB']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 1 }}

        >
          <Text style={styles.text}>Contact Information</Text>
          <View style={styles.flex}>
          <Image 
        source={require('../assets/contacts.png')}
        style={styles.logo}
        />
          </View>
        </LinearGradient>
        <View style={styles.Card}>
          <View style={styles.cardContainer}>
          <Image 
        source={require('../assets/phone.png')}
        style={styles.icons}
        />
        <Text style={styles.text2}>          +91 931258023</Text>
          </View>
          <View style={styles.cardContainer}>
          <Image 
        source={require('../assets/mail2.png')}
        style={styles.icons}
        />
        <Text style={styles.text2}>aniket8439@gmail.com</Text>
          </View>
          <View style={styles.cardContainer}>
          <Image 
        source={require('../assets/locate.png')}
        style={styles.icons}
        />
        <Text style={styles.text2}>     xyz, New York city  </Text>
          </View>
        </View>
        <Text style={{color:"#000000",marginTop:20,fontSize:18,textAlign:"center"}}>or</Text>
        <View style={styles.cardContainer}>
        <TouchableOpacity
            onPress={()=> openWebsite('https://www.facebook.com/profile.php?id=100004187280151')}
            >
          <Image 
        source={require('../assets/facebook.png')}
        style={styles.icons}
        />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> openWebsite('https://www.instagram.com/aniket_sharma_8439/')}
            >
          <Image 
        source={require('../assets/instagram.png')}
        style={styles.icons}
        />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> openWebsite('https://www.linkedin.com/in/aniket-sharma-340972212/')}
            >
          <Image 
        source={require('../assets/linkedin.png')}
        style={styles.icons}
        />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> openWebsite('https://github.com/aniket8439')}
            >
          <Image 
        source={require('../assets/github.png')}
        style={styles.icons}
        />
          </TouchableOpacity>
        </View>
        <View style={styles.circle}>
          <View style={styles.lilCircle}></View>
        </View>
    </View>
  )
}

export default Contacts

const styles = StyleSheet.create({
    container:{
        height:300
    },
    text:{
        textAlign:"center",
        color:"#FFF",
        fontSize:28,
       marginTop:10,
       fontWeight:"bold"
    },
    logo:{
      height:150,
      width:150,
      margin:8,
      marginBottom:80
    },
    flex:{
      alignItems:"center"
    },
    Card:{
      backgroundColor:"#FFF",
      height:200,
      marginLeft:30,
      marginRight:30,
      marginTop:-40,
      borderRadius:8,
      elevation:3,
    },
    cardContainer:{
      marginTop:25,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-around",
      paddingHorizontal:20
    },
    icons:{
      height:30,
      width:30
    },
    text2:{
      color:'#758283',
      fontSize:20
    },
    circle:{
      height:350,
      width:350,
      backgroundColor:"#FF6666",
      borderRadius:350/2,
      marginLeft:200,
      marginTop:50,
      elevation:5
    },
    lilCircle:{
      height:130,
      width:130,
      backgroundColor:"#8D3DAF",
      borderRadius:130/2,
      marginRight:20,
      marginLeft:-30,
      marginTop:-20,
      elevation:7
    }
})