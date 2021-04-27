import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentNote, setCurrentNote, saveTodo } from "../redux/features/todoSlice";

const addNoteButton = () => {

  const currentNote = useSelector(selectCurrentNote);
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(
      saveTodo({
        title: currentNote,
        done: false,
        id: new Date().getMilliseconds(),
      })
    );

    dispatch(
      setCurrentNote("")
    )
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        addTodo();
      }}
    >
      <Text>Add!</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 200,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 32,
  },
});


export default addNoteButton
