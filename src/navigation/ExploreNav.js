import React from 'react'
import HomeScreen from '../screens/Home'
import SearchResultScreen from '../screens/SearchResults'
import {createStackNavigator} from '@react-navigation/stack'
import SearchResultsTabNav from './SearchResultsTabNav'

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
         component={SearchResultsTabNav}
         options={{
            title:'Search your Destination',
            headerTitleAlign:'center'
         }}
        />
    </Stack.Navigator>
  )
}