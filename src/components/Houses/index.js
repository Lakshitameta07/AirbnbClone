import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

function House(props) {
  const house = props.house;

  const navigation = useNavigation();

  const gotToPostPage = () => {
    navigation.navigate('PostPage', {houseId: house.id});
  };
  return (
    <Pressable onPress={gotToPostPage} style={styles.container}>
      <Image style={styles.image} source={{uri: house.image}} />
      <Text style={styles.bedroom}>
        {house.bed} bed {house.bedroom} bedroom
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {house.type}, {house.title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}> {house.oldPrice} </Text>
        <Text style={styles.newPrice}> {house.newPrice} </Text>/ night
      </Text>
      <Text style={styles.totalPrice}>{house.totalPrice}</Text>
    </Pressable>
  );
}

export default House;
