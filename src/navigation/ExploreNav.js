import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/Home'
import SearchResultScreen from '../screens/SearchResults'
import {createStackNavigator} from '@react-navigation/stack'


const Stack = createStackNavigator()

export default function ExploreNav() {
  return (
    <Stack.Navigator>
        <Stack.Screen
         name='Welcome'
         component={HomeScreen}
         options={{
            headerShown:false
         }}
        />
        <Stack.Screen
         name='SearchResults'
         component={SearchResultScreen}
         options={{
            title:'Search your Destination',
            headerTitleAlign:'center'
         }}
        />
    </Stack.Navigator>
  )
}