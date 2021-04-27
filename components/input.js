import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

import { useDispatch, useSelector } from "react-redux";
import { selectCurrentNote, setCurrentNote } from "../redux/features/todoSlice";

const Input = () => {

  const currentNote = useSelector(selectCurrentNote);
  const dispatch = useDispatch();

  const handleChange = (t) => {
    dispatch(setCurrentNote(t));
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} onChangeText={handleChange} value={currentNote} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'red',
    padding: 32,
    width: 200,
    height: 80,
    justifyContent: 'center'
  },
  input: {
    backgroundColor: 'white',
    fontSize: 16,
    padding: 8,
    height: 40
  }
})

export default Input
