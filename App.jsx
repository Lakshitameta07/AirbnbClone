import {StatusBar} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from "react-native-gesture-handler"
import HomeScreen from './src/screens/Home';
import Router from './src/navigation/Router';
import {enableLatestRenderer} from 'react-native-maps';
import {withAuthenticator} from '@aws-amplify/ui-react-native'

enableLatestRenderer();

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
       <Router/>
    </>
  );
}


export default withAuthenticator(App);