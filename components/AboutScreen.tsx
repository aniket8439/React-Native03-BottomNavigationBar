import { StyleSheet, Text, View, ScrollView, Linking, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from '@rneui/base'




const AboutScreen = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink)
  }
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.logoText}>
        <Image 
        source={require('../assets/logo.png')}
        style={styles.logo}
        />
        <Text style={styles.name}>Ghar_ka_Swaad</Text>
      </View>
      <Text style={styles.text}>We're on a Mission</Text>
      <Text style={styles.normalText}>Ghar-ka-Swaad is a tech company working to reconnect the world with 
        everyday cooking. We believe that cooking is the key to a happier 
        and healthier life for people, communities and the planet.</Text>
        <View style={styles.cardContainer}>
        <View style={styles.button}>
        <TouchableOpacity
            onPress={()=> openWebsite('https://www.instagram.com/aniket_sharma_8439/')}
            >
          <Text style={{color:'#FFFFFF'}}>follow us {'>'}</Text>
          </TouchableOpacity>
        </View>
        </View>
        <Image 
        source={require('../assets/bkcians.jpg')}
        style={styles.bkcians}
        />
        <View style={styles.cardContainer2}>
          <View>
            <Text style={styles.rating}>$8.5M+</Text>
            <Text style={styles.normalText}>Happy Client</Text>
          </View>
          <View >
            <Text style={styles.rating}>80%</Text>
            <Text style={styles.normalText}>Daily engagement</Text>
          </View>
          <View >
            <Text style={styles.rating}>300</Text>
            <Text style={styles.normalText}>members</Text>
          </View>
          <View >
            <Text style={styles.rating}>25+</Text>
            <Text style={styles.normalText}>Awards</Text>
          </View>
        </View>
    </View>
    <View>
    <View style={styles.cardContainer3}>
      <Image 
      source={{
        uri:'https://images.pexels.com/photos/1846398/pexels-photo-1846398.jpeg?auto=compress&cs=tinysrgb&w=600'
      }}
      style={styles.img}
      />
      <View style={styles.card}>
        <Text style={styles.text}>Our Founding Story</Text>
        <Text style={styles.normalText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Cras id nisl eu augue sodales dignissim. Duis eu elit in libero 
          rutrum pellentesque sed at est. </Text>
      </View>
    </View>
    </View>
    </ScrollView>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFFFFF",
    },
    text:{
        textAlign:"center",
        color:"#000000",
        fontWeight:"bold",
        fontSize:28,
       
    },
    logo:{
      height:80,
      width:80,
      borderRadius:40,
      marginTop:-10
    },
    name:{
      color:"#6A1B4D",
      fontWeight:"bold",
      fontSize:22,
      justifyContent:"center",
      marginTop:12
    },
    logoText:{
      flexDirection:"row"
    },
    normalText:{
      color:"#000000",
      textAlign:"center",
      marginLeft:40,
      marginRight:40,
      marginTop:4
    },
    bkcians:{
      height:300,
      width:350,
      marginTop:8,
      marginLeft:20,
      borderRadius:8
    },
    button:{
      height:40,
      width:100,
      backgroundColor:'orange',
      borderRadius:10,
      alignItems:"center",
      justifyContent:"center"
    },
    cardContainer:{
      alignItems:"center",
      padding:8
    },
    
    cardContainer2:{
      flexDirection:"row",
      padding:12,
      justifyContent:"space-evenly",
      alignItems:"center",
      paddingHorizontal:30
    },
    rating:{
      color:"#000000",
      fontSize:22,
      textAlign:"center",
      fontWeight:"bold"
    },
    img:{
      height:180,
      width:150,
      borderRadius:6,
    },
    cardContainer3:{
      flexDirection:"row",
      padding:8,
      justifyContent:"flex-start",
      alignItems:"center",
      paddingHorizontal:8,
      marginTop:10
    },
    
    card:{
      width:240
    }
    
})