import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/Home';
import House from './src/components/Houses';
import feed from './src/assests/data/feed';
import SearchResultScreen from './src/screens/SearchResults';

const house1 = feed[0];

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      {/* <House house={house1} /> */}
      <SearchResultScreen/>
    </>
  );
}
