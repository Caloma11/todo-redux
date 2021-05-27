import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Entypo } from "@expo/vector-icons";
import { setSidebarToggled } from '../redux/features/todoSlice';
import { useDispatch } from 'react-redux';

const OptionsButton = () => {

  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(setSidebarToggled(true));
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
