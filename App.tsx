import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutScreen from './components/AboutScreen';
import HomeScreen from './components/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import Contacts from './components/Contacts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
    
    <Tab.Navigator 
    screenOptions={{
      tabBarActiveBackgroundColor:"#000000",
      tabBarInactiveTintColor:"#000000",
      tabBarActiveTintColor:"#FFFFFF",
      
      }}>
      <Tab.Screen  name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          
        }} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Contacts" component={Contacts}
     options={{
      tabBarLabel: 'Contacts',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="account" color={color} size={size} />
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