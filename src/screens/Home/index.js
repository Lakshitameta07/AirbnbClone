import { View, Text, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'

function HomeScreen() {
  return (
    <View>
      <Pressable
          style={styles.Searchbutton}
          onPress={() => console.warn("Pressable")}
        >
          <Fontisto name="search" size={25} color={"#f15454"}/>
        <Text style={styles.Searchbtntxt}>
          where are you going?
        </Text>
        </Pressable>
      <ImageBackground
        source={require('../../assests/wallpaper.jpg')}
        style={styles.image}>

        <Text style={styles.title}>
          Go Near
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => console.warn("Pressable")}
        >
        <Text style={styles.btntxt}> Explore nearby places </Text>
        </Pressable>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen