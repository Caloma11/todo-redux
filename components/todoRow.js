import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const TodoRow = ({item}) => {
  return (
    <TouchableOpacity style={styles.row}>
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
