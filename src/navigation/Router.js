import {View, Text, useColorScheme} from 'react-native';
import React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import GuestScreen from '../screens/GuestPageScreen';
import HomeTabNav from './HomeTabNav';
import House from '../components/Houses';
import PostScreen from '../screens/PostScreen';

const Stack = createStackNavigator();

export default function Router() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name={'Home'}
          component={HomeTabNav}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Destination Search'}
          component={SearchScreen}
          options={{
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name={'GuestPage'}
          component={GuestScreen}
          options={{
            title: 'How many people',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name={'Houses'}
          component={House}
          options={{
            title: 'Airbnb Houses',
            headerTitleAlign: 'center',
          }}
        />

        <Stack.Screen
          name={'PostPage'}
          component={PostScreen}
          options={{
            title: 'Accomodation',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
