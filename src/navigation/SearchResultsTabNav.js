import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchResultScreen from '../screens/SearchResults';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createMaterialTopTabNavigator()

export default function SearchResultsTabNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FF5A5F',
        tabBarInactiveTintColor: 'grey',
        tabBarIndicatorStyle:{
          backgroundColor:'#FF5A5F'
        }
      }}
    >
      <Tab.Screen
        name='List'
        component={SearchResultScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='list-outline' size={20} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Map'
        component={SearchResultScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='map' size={20} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}