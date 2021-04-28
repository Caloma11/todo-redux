import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../redux/features/todoSlice";

const addNoteButton = ({navigation}) => {

  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(setActiveNote({}))
    navigation.navigate("NoteScreen");
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={addTodo}
    >
      <MaterialCommunityIcons name="plus" size={32} color="#F3FCF0" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 64,
    width: 64,
    borderRadius: 32,
    zIndex: 4,
    position: "absolute",
    bottom: 24,
    backgroundColor: "#23231a",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 32,
  },
});


export default addNoteButton
