import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/Home';
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import ExploreNav from './ExploreNav';
import SearchResultsMap from '../screens/SearchResults/SearchResultsMap';
import PostScreen from '../screens/PostScreen';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function HomeTabNav() {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarActiveTintColor:'#FF5A5F',
        tabBarInactiveTintColor:'grey'
    }}
    >
        <Tab.Screen
         name='Explore'
         component={ExploreNav}
         options={{
            headerShown:false,
            tabBarIcon:({color})=>(
             <Fontisto name="search" size={25} color={color}/>  
            )
         }}
         />
         <Tab.Screen
         name='Saved'
         component={HomeScreen}
         options={{
            headerShown:false,
            tabBarIcon:({color})=>(
             <FontAwesome name="heart-o" size={25} color={color}/>  
            )
         }}
         />
         <Tab.Screen
         name='Airbnb'
         component={HomeScreen}
         options={{
            headerShown:false,
            tabBarIcon:({color})=>(
             <FontAwesome5 name="airbnb" size={25} color={color}/>  
            )
         }}
         />
         <Tab.Screen
         name='Messages'
         component={HomeScreen}
         options={{
            headerShown:false,
            tabBarIcon:({color})=>(
             <Feather name="message-square" size={25} color={color}/>  
            )
         }}
         />
         <Tab.Screen
         name='Profile'
         component={Profile}
         options={{
            headerShown:false,
            tabBarIcon:({color})=>(
             <EvilIcons name="user" size={25} color={color}/>  
            )
         }}
         />
    </Tab.Navigator>
  )
}