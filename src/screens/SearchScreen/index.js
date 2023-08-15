import { View,Pressable, Text, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import searchData from '../../assests/data/searchData'
import Entypo from 'react-native-vector-icons/Entypo'
import {useNavigation} from '@react-navigation/native'

function SearchScreen({ props }) {

  const [input, setInput] = useState('')
  const navigation =useNavigation()

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textinput}
        value={input}
        placeholder='Where are you going? '
        onChangeText={setInput}
      />
      <FlatList
        data={searchData}
        renderItem={({ item }) =>
          <Pressable onPress={() => navigation.navigate('GuestPage')}
          style={styles.rowData}
          >
            <View style={styles.iconContainer}>
                 <Entypo name='location-pin' size={28} color='black'/>
            </View>
            <Text style={styles.searchtext}>
              {item.description}
            </Text>
          </Pressable>}
      />
    </View>
  )
}


export default SearchScreen