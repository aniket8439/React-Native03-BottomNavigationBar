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
    <NavigationContainer>
    
    <Tab.Navigator 
    screenOptions={{
      tabBarActiveBackgroundColor:"#03203C",
      tabBarInactiveTintColor:"#000000",
      tabBarActiveTintColor:"#FFFFFF",
      
      }}>
      <Tab.Screen  name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('./assets/logo2.png')
                  : require('./assets/logo2.png')
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
                  : require('./assets/logo3.gif')
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
                : require('./assets/logo4.png')
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
  )
}

export default App
const styles= StyleSheet.create({
  screen:{
    backgroundColor:"#000000"
  }
})