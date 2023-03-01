import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { Image } from '@rneui/base'
import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';





function HomeScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FF6263', '#f1c40f', '#E83A59']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 1 }}

      >
        <Text style={styles.text}>Begin your Jouney to success! </Text>
      </LinearGradient>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/40815/youth-active-jump-happy-40815.jpeg?auto=compress&cs=tinysrgb&w=600'
        }}
        style={styles.img}
      />
      <View style={styles.classContainer}>
        <Text style={styles.classText}>My Daily Classes</Text>

        <Progress.Bar progress={0.3} width={100} color="green" borderColor='#000000' height={30} unfilledColor='#e6e7eb' style={styles.progressBar} />
        <Text style={styles.progressText}>1/4</Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.Card1}>
          <Image
            source={require('../assets/tick.png')}
            style={styles.tick}
          />
          <Text style={styles.welcomeText}>Welcome to Ghar-ka-Swaad</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.Card2}>
          <Image
            source={require("../assets/notes.png")}
            style={styles.notesImg} />
          <View style={styles.cardSpace}>
            <Text style={styles.text1}>Your Personal Objective</Text>
            <View style={styles.flex}>
            <Image
            source={require("../assets/clock.png")}
            style={styles.clockImg} />
            <Text style={styles.textTime}>  2 min</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.Card3}>
          <Image
            source={require("../assets/notes.png")}
            style={styles.notesImg} />
          <View style={styles.cardSpace}>
            <Text style={styles.text2}>Measure your success-the</Text><Text style={styles.text2}> weight-in</Text>
            <View style={styles.flex}>
            <Image
            source={require("../assets/clock.png")}
            style={styles.clockImg} />
            <Text style={styles.textTime}>  4 min</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.Card3}>
          <Image
            source={require("../assets/notes.png")}
            style={styles.notesImg} />
          <View style={styles.cardSpace}>
            <Text style={styles.text2}>Your have the basics</Text>
            <View style={styles.flex}>
            <Image
            source={require("../assets/clock.png")}
            style={styles.clockImg} />
            <Text style={styles.textTime}>  3 min</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f7fc",
    height: "100%"
  },
  text: {
    color: "#000000",
    fontSize: 24,
    fontFamily: 'monospace',
    paddingHorizontal: 8
  },
  img: {
    height: 180
  },
  classContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 8
  },
  classText: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "monospace"
  },
  progressBar: {
    height: 10,
    marginLeft: 20
  },
  progressText: {
    color: "#758283"
  },
  cardContainer: {
    paddingHorizontal: 8
  },
  Card1: {
    height: 50,
    backgroundColor: "#FFF",
    margin: 12,
    borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row"
  },
  tick: {
    height: 25,
    width: 25,
    marginLeft: 16
  },
  welcomeText: {
    color: "#babfba",
    marginLeft: 16,
    fontWeight: "bold"
  },
  Card2: {
    height: 90,
    backgroundColor: "#FFF",
    margin: 6,
    borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    borderColor:"#758283",
    elevation:3
  },
  notesImg: {
    height: 60,
    width: 60,
    marginLeft: 14,
    borderRadius:8
  },
  text1:{
    color:"#000000",
    fontSize:18,
    marginBottom:8,
    fontWeight:"bold"
  },
  cardSpace:{
    marginLeft:16
  },
  flex:{
    flexDirection:"row"
  },
  clockImg:{
    height:20,
    width:20
  },
  textTime:{
    color:"#babfba"
  },
  Card3: {
    height: 90,
    backgroundColor: "#FFF",
    margin: 6,
    borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row"
  },
  text2:{
    color: "#babfba",
    fontWeight: "bold",
    fontSize:18
  }
})