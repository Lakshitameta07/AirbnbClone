import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'

function DetailedPost(props) {

  const house = props.house;
  return (
    <View style={styles.container}>
      <Image style={styles.image}
        source={
          { uri: house.image}} />
      <Text style={styles.bedroom}>{house.bed} bed {house.bedroom} bedroom</Text>
      <Text style={styles.description} numberOfLines={2}>{house.type}, {house.title}</Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}> {house.oldPrice} </Text>
        <Text style={styles.newPrice}> {house.newPrice} </Text>
        / night
      </Text>
      <Text style={styles.totalPrice}>{house.totalPrice}</Text>
      <Text>{house.description}</Text>
    </View>
  )
}

export default DetailedPost