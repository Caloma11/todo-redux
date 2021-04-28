import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';
import { setActiveNote } from "../redux/features/todoSlice";


const TodoRow = ({item, navigation}) => {

  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(setActiveNote(item));
    navigation.navigate("NoteScreen")
  }

  return (
    <TouchableOpacity style={item.last ? [styles.row, styles.last] : styles.row } onPress={handlePress}>
      <Text style={styles.rowText}>{item.title}</Text>
    </TouchableOpacity>
  )
}

export default TodoRow

const styles = StyleSheet.create({
  row: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderWidth: 1,
    borderColor: 'gray'
  },
  rowText: {
    fontSize: 20,
    color: "#23231a"
  },
  last: {
    borderBottomWidth: 2,
  }
})
