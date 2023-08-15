import {StatusBar} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from "react-native-gesture-handler"
import HomeScreen from './src/screens/Home';
import Router from './src/navigation/Router';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
       <Router/>
    </>
  );
}
