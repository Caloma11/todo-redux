import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Entypo } from "@expo/vector-icons";
import { selectSidebarToggled, setSidebarToggled } from '../redux/features/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

const OptionsButton = () => {

  const dispatch = useDispatch();
  const sidebarToggled = useSelector(selectSidebarToggled);

  const handlePress = () => {
    dispatch(setSidebarToggled(!sidebarToggled));
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress} >
      <Entypo name="menu" size={36} color="white" style={ sidebarToggled ?  styles.icon : null } />
    </TouchableOpacity>
  );
}

export default OptionsButton

const styles = StyleSheet.create({
  button: {
    marginLeft: 16
  },
  icon: {
    transform: [{ rotate: "90deg"}]
  }
})
