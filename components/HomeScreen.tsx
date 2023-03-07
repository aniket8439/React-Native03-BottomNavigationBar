import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { Image } from '@rneui/base'
import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';
import CircularProgress from 'react-native-circular-progress-indicator';





function HomeScreen() {
  return (
    <ScrollView>
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

          <Progress.Bar progress={0.3} width={100} color="rgb(71, 210, 71)" borderColor='#000000' height={30} unfilledColor='#e6e7eb' style={styles.progressBar} />
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
              source={require("../assets/weight.png")}
              style={styles.notesImg} />
            <View style={styles.cardSpace}>
              <Text style={styles.text2}>Measure your success-the</Text><Text style={styles.text2}> weight-in</Text>
              <View style={styles.flex}>
                <Image
                  source={require("../assets/lock.png")}
                  style={styles.clockImg} />
                <Text style={styles.textTime}>  4 min</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.Card3}>
            <Image
              source={require("../assets/juice.png")}
              style={styles.notesImg} />
            <View style={styles.cardSpace}>
              <Text style={styles.text2}>You have the basics</Text>
              <View style={styles.flex}>
                <Image
                  source={require("../assets/lock.png")}
                  style={styles.clockImg} />
                <Text style={styles.textTime}>  3 min</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.classContainer2}>
          <Text style={styles.classText}>My Goals</Text>
          <Text style={styles.classText}>See My Journal {'>'} </Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.Card4}>
            <View>
             <CircularProgress
              value={170}
              radius={40}
              progressValueColor={'black'}
              maxValue={200}
              title={'/200 g'}
              titleColor={'#758283'}
              activeStrokeColor={'#F7CD2E'}
              inActiveStrokeColor={'#f7faa5'}
              titleStyle={{ fontWeight: 'bold' }}
            />
            <Text style={styles.text3}>Fats</Text>
            </View>
            <View>
             <CircularProgress
             value={87}
             radius={40}
             progressValueColor={'black'}
             maxValue={95}
             title={'/95 g'}
             titleColor={'#758283'}
             activeStrokeColor={'#FF6666'}
             inActiveStrokeColor={'#fabbc3'}
             titleStyle={{ fontWeight: 'bold' }} />
            <Text style={styles.text3}>Proteins</Text>
            </View>
            <View>
             <CircularProgress
              value={125}
              radius={40}
              progressValueColor={'black'}
              maxValue={278}
              title={'/278 g'}
              titleColor={'#758283'}
              activeStrokeColor={'#23C4ED'}
              inActiveStrokeColor={'#bbe3fa'}
              titleStyle={{ fontWeight: 'bold' }}
            />
            <Text style={styles.text3}>Carbs</Text>
            </View>
            <View>
             <CircularProgress
              value={22}
              radius={40}
              progressValueColor={'black'}
              maxValue={27}
              title={'/27 g'}
              titleColor={'#758283'}
              activeStrokeColor={'#BF3325'}
              inActiveStrokeColor={'#facabb'}
              titleStyle={{ fontWeight: 'bold' }}
            />
            <Text style={styles.text3}>Fibers</Text>
            </View>
          </View>
        </View>
        <View style={styles.classContainer3}>
          <Text style={styles.classText}>My Tools</Text>
          </View>
        <View style={styles.flex2}>
          <View style={styles.newCard1}>
          <Image
              source={require("../assets/nutri.png")}
              style={styles.img2} />
              <Text style={styles.text1}>My nutritionist</Text>
              <Text style={styles.text4}>Chat with Elsa</Text>
          </View>
          <View style={styles.newCard2}>
          <Image
              source={require("../assets/recipe.png")}
              style={styles.img2} />
              <Text style={styles.text1}>My recipes</Text>
              <Text style={styles.text4}>More than 300 recipes</Text>
          </View>
        </View>
        <View style={styles.flex2}>
          <View style={styles.newCard3}>
          <Image
              source={require("../assets/articles.png")}
              style={styles.img2} />
              <Text style={styles.text1}>My articles</Text>
              <Text style={styles.text4}>More than 500 articles</Text>
          </View>
          <View style={styles.newCard4}>
          <Image
              source={require("../assets/class.png")}
              style={styles.img2} />
              <Text style={styles.text1}>My classes</Text>
              <Text style={styles.text4}>And my program</Text>
          </View>
        </View>
      </View>
    </ScrollView>


  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f7fc",
    height: "100%",
    flex: 1
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
  classContainer2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    marginLeft: 6
  },
  classText: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "800",
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
    borderColor: "#758283",
    elevation: 3
  },
  notesImg: {
    height: 60,
    width: 60,
    marginLeft: 14,
    borderRadius: 8
  },
  text1: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold"
  },
  cardSpace: {
    marginLeft: 16
  },
  flex: {
    flexDirection: "row",
    marginTop: 10
  },
  clockImg: {
    height: 20,
    width: 20
  },
  textTime: {
    color: "#babfba"
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
  text2: {
    color: "#babfba",
    fontWeight: "bold",
    fontSize: 18
  },
  Card4: {
    height: 130,
    backgroundColor: "#FFF",
    margin: 6,
    borderRadius: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row"
  },
  text3:{
    color:"#242B2E",
    textAlign:"center",
    fontSize:16,
    fontWeight:"bold"
  },
  flex2:{
    flexDirection:"row",
    marginTop:8,
    justifyContent:"space-evenly"
  },
  newCard1:{
    height:150,
    width:170,
    backgroundColor:"#93d4fa",
    borderRadius:14,
    alignItems:"center",
    marginBottom:6,
    elevation:3
  },
  newCard2:{
    height:150,
    width:170,
    backgroundColor:"#fabbc3",
    borderRadius:14,
    alignItems:"center",
    marginBottom:6,
    elevation:3
  },
  newCard3:{
    height:150,
    width:170,
    backgroundColor:"#50DBB4",
    borderRadius:14,
    alignItems:"center",
    marginBottom:6,
    elevation:3
  },
  newCard4:{
    height:150,
    width:170,
    backgroundColor:"#f6f78f",
    borderRadius:14,
    alignItems:"center",
    marginBottom:6,
    elevation:3
  },
  
  classContainer3:{
    paddingHorizontal:8,
    margin:8
  },
  img2:{
    height:70,
    width:70,
    marginTop:10
  },
  text4:{
    color:"#000000"
  }
})