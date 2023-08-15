import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

function GuestScreen() {
  const [adults, setAdults] = useState(0)
  const [childern, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)

  const navigation = useNavigation();

  return (
    <View style={{
      justifyContent: 'space-between',
      height: '100%'
    }}>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Adults</Text>
            <Text style={{ color: '#8d8c8c' }}>Agres 13 or Above</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: 'grey' }}>-</Text>
            </Pressable>
            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{adults}</Text>
            <Pressable
              onPress={() => setAdults(Math.min(100, adults + 1))}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: 'grey' }}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Children</Text>
            <Text style={{ color: '#8d8c8c' }}>Agres 2-12</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => setChildren(Math.max(0, childern - 1))}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: 'grey' }}>-</Text>
            </Pressable>
            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{childern}</Text>
            <Pressable
              onPress={() => setChildren(Math.min(10, childern + 1))}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: 'grey' }}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Infants</Text>
            <Text style={{ color: '#8d8c8c' }}>Under 2</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: 'grey' }}>-</Text>
            </Pressable>
            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{infants}</Text>
            <Pressable
              onPress={() => setInfants(Math.min(100, infants + 1))}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: 'grey' }}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Pressable
        onPress={() =>
          navigation.navigate('Home',{
            screen:'Explore',
            params:{
              screen:'SearchResults'
            },
          })
        }
        style={{
          marginBottom: 20,
          backgroundColor: '#f15454',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          marginHorizontal: 20,
          borderRadius: 10
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold'
          }}
        >Search</Text>
      </Pressable>
    </View>
  )
}

export default GuestScreen
