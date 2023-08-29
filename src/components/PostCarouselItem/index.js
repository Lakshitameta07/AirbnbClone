import {View, Text, Image,useWindowDimensions} from 'react-native';
import React from 'react';
import styles from './style';

function House(props) {
  const {house} = props;

  const width = useWindowDimensions().width
  return (
    <View style={[styles.container,{width: width-30}]}>
      <View style={styles.innerContainer}>
      <Image style={styles.image} source={{uri: house.image}} />
      <View style={{flex:1,marginHorizontal:10}}>
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
    </View>
  );
}

export default House;
