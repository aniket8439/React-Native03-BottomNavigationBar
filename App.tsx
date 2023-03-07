import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutScreen from './components/AboutScreen';
import HomeScreen from './components/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import Contacts from './components/Contacts';

const Tab = createBottomTabNavigator();

const App = () => {
  
  return (
    <View style={styles.container}>
     
    <NavigationContainer>
    <Tab.Navigator 
    screenOptions={{
      tabBarInactiveTintColor:"#758283",
      tabBarActiveTintColor:"#000",
      headerShown:false
      }}>
      <Tab.Screen  name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('./assets/logo2.png')
                  : require('./assets/logo1.png')
              }
              style={{
                width: size,
                height: size,
                borderRadius: size,
              }}
            />
          ),
          
        }} />
      <Tab.Screen name="About" component={AboutScreen} options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('./assets/logo3.gif')
                  : require('./assets/logo5.png')
              }
              style={{
                width: size,
                height: size,
                borderRadius: size,
              }}
            />
          ),
          
        }} />
      <Tab.Screen name="Contacts" component={Contacts}
      options={{
        tabBarLabel: 'Contact',
        tabBarIcon: ({ focused, color, size }) => (
          <Image
            source={
              focused
                ? require('./assets/logo4.png')
                : require('./assets/logo6.png')
            }
            style={{
              width: size,
              height: size,
              borderRadius: size,
            }}
          />
        ),
        
      }}
           />
    </Tab.Navigator>
    </NavigationContainer>
   
    </View>
  )
}

export default App
const styles= StyleSheet.create({
  screen:{
    backgroundColor:"#000000"
  },
  contentContainer:{
    flex:1,
    flexGrow:1
  },
  container:{
    flex:1
  }
})