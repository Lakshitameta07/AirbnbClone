import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from '../screens/SearchScreen';
import GuestScreen from '../screens/GuestPageScreen';
import HomeTabNav from './HomeTabNav';
import House from '../components/Houses';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
            name={"Home"}
            component={HomeTabNav}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen 
            name={"Destination Search"}
            component={SearchScreen}
            options={{
                headerTitleAlign:'center'
            }}
            />
            <Stack.Screen 
            name={"GuestPage"}
            component={GuestScreen}
            options={{
                title:"How many people",
                headerTitleAlign:'center'
            }}
            />
            <Stack.Screen 
            name={"Houses"}
            component={House}
            options={{
                title:"Airbnb Houses",
                headerTitleAlign:'center'
            }}
            />

        </Stack.Navigator>
    </NavigationContainer>
  )
}