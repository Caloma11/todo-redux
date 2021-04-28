import React from "react";
import { StyleSheet, TouchableOpacity, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { deleteActiveNote } from "../redux/features/todoSlice";

const DeleteNoteButton = ({ navigation }) => {
  const dispatch = useDispatch();

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
          onPress: () => {
             dispatch(deleteActiveNote(""));
             navigation.navigate("ListScreen");
          },
          style: "ok",
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <TouchableOpacity style={styles.button} onPress={deleteTodo}>
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
