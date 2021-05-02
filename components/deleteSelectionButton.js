import React from "react";
import { StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectSelectedTodos, resetPressedAmount  } from "../redux/features/todoSlice";
import { FontAwesome } from "@expo/vector-icons";


const DeleteSelectionButton = ({toggleLoaded}) => {

  const selectedTodos = useSelector(selectSelectedTodos);
  const dispatch = useDispatch();

  const requestDelete = () => {
    fetch(`https://polar-reaches-33143.herokuapp.com/api/v1/notes/bulk`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ notes: selectedTodos }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(resetPressedAmount(''));
        toggleLoaded();
      })
      .catch((a) => console.log(a));
  };

const deleteSelectedTodos = () => {
  Alert.alert(
    "Delete note",
    `Are you sure you want to delete ${selectedTodos.length === 1 ? 'this note' : ('these ' + selectedTodos.length + " notes" )}?`,
    [
      {
        text: "Cancel",
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
    <TouchableOpacity style={styles.button} onPress={deleteSelectedTodos}>
      <FontAwesome name="trash-o" style={styles.trash} size={24} color="white" />
    </TouchableOpacity>
  );
};

export default DeleteSelectionButton;

const styles = StyleSheet.create({
  trash: {
    marginRight: 16
  }
});
