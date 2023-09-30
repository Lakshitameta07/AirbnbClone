import {View, Text, Image, useWindowDimensions, Pressable} from 'react-native';
import React from 'react';
import styles from './style';
import {useNavigation, useRoute} from '@react-navigation/native';

function House(props) {
  const {house} = props;

  const navigation = useNavigation();

  const gotToPostPage = () => {
    navigation.navigate('PostPage', {houseId: house.id});
  };

  const width = useWindowDimensions().width;
  return (
    <Pressable
      onPress={gotToPostPage}
      style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={{uri: house.image}} />
        <View style={{flex: 1, marginHorizontal: 10}}>
          <Text style={styles.bedroom}>
            {house.bed} bed {house.bedroom} bedroom
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {house.type}, {house.title}
          </Text>
          <Text style={styles.prices}>
            <Text style={styles.newPrice}> {house.newPrice} </Text>/ night
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default House;
