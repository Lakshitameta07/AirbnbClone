import {Text, ImageBackground, Pressable} from 'react-native'
import React from 'react'
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'
import {useNavigation} from '@react-navigation/native'

function HomeScreen() {

  const navigation = useNavigation()
  return (
    <>
      <Pressable
          style={styles.Searchbutton}
          onPress={() => navigation.navigate('Destination Search')}
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
          onPress={() => console.warn("Pressed")}
        >
        <Text style={styles.btntxt}> Explore nearby places </Text>
        </Pressable>
      </ImageBackground>
    </>
  )
}

export default HomeScreen