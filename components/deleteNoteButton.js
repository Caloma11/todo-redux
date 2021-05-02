import React from "react";
import { StyleSheet, TouchableOpacity, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectActiveNote } from "../redux/features/todoSlice";

const DeleteNoteButton = ({ navigation, toggleLoaded }) => {
  const activeNote = useSelector(selectActiveNote);

  const requestDelete = () => {
    fetch(
      `https://polar-reaches-33143.herokuapp.com/api/v1/notes/${activeNote.id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then(() => {
        navigation.navigate("ListScreen");
        toggleLoaded();
      })
      .catch((a) => console.log(a));
  };

  const deleteTodo = () => {
    Alert.alert(
      "Delete note",
      "Are you sure?",
      [
        {
          text: "Cancel",
          onPress: () => Alert.alert("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: requestDelete,
          style: "ok",
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <TouchableOpacity style={styles.button} onPress={deleteTodo} disabled={!activeNote.id}>
      <FontAwesome name="trash-o" size={32} color="#a44a3f" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 64,
    width: 64,
    borderRadius: 32,
    zIndex: 4,
    position: "absolute",
    bottom: 80,
    right: 24,
    borderWidth: 1,
    borderColor: "#f3fcf0",
    backgroundColor: "#FBB7C0",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 32,
  },
});

export default DeleteNoteButton;
