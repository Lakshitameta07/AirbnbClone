import { View, Text,StyleSheet, Pressable } from 'react-native'
import React from 'react'
import {signOut} from 'aws-amplify/auth'

export default function Profile() {

    const logout = async () => {
        try {
            await signOut()
        } catch (error) {
            console.warn('error signing Out !')
        }
    }

  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <Pressable onPress={logout} style={styles.button}>
        <Text style={styles.buttontxt}>SignOut</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:"center"
    },
    button:{
        width:'80%',
        backgroundColor:"orange",
        borderRadius:10,
        padding:10,
        marginTop:10
    },
    buttontxt:{
        fontSize:20,
        fontWeight:'900',
        textAlign:"center"
    }
})