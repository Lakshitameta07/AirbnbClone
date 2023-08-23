import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './style';
import Entypo from 'react-native-vector-icons/Entypo';

const SuggestionRow = ({item}) => (
  <Pressable
    onPress={() => navigation.navigate('GuestPage')}
    style={styles.rowData}>
    <View style={styles.iconContainer}>
      <Entypo name="location-pin" size={28} color="black" />
    </View>
    <Text style={styles.searchtext}>{item.description}</Text>
  </Pressable>
);

export default SuggestionRow;
