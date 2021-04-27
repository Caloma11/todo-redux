import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const TodoRow = ({item, navigation}) => {

  const handlePress = () => {
    navigation.navigate("NoteScreen", {note: item})
  }

  return (
    <TouchableOpacity style={styles.row} onPress={handlePress}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  )
}

export default TodoRow

const styles = StyleSheet.create({
  row: {
    padding: 16,
    borderWidth: 1,
    borderColor: 'gray'
  }
})
