import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Entypo } from "@expo/vector-icons";

const OptionsButton = () => {

  const handlePress = () => {
    console.log("hahaha")
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress} >
      <Entypo name="menu" size={36} color="white" style={styles.icon} />
    </TouchableOpacity>
  );
}

export default OptionsButton

const styles = StyleSheet.create({
  button: {
    // backgroundColor: 'red',
    marginLeft: 16
  },
  icon: {

  }
})
