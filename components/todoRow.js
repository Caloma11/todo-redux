import React, {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';
import { setActiveNote } from "../redux/features/todoSlice";


const TodoRow = ({item, navigation, pressedAmount, setPressedAmount }) => {

  const dispatch = useDispatch();

  const [pressed, setPressed] = useState(false);

  const isLast = item.last ? styles.last : {};
  const isPressed = pressed ? styles.pressed : {};


  const handlePress = () => {
    if (pressedAmount === 0) {
      dispatch(setActiveNote(item));
      navigation.navigate("NoteScreen");
    } else {
      setPressed(!pressed);
      setPressedAmount(pressedAmount + (!pressed ? 1 : -1));
    }
  };


  const handleLongPress = () => {
    setPressed(true);
    setPressedAmount(pressedAmount + 1);
  }
  return (
    <TouchableOpacity
      style={[styles.row, isLast, isPressed]}
      onPress={handlePress}
      onLongPress={handleLongPress}
    >
      <Text style={styles.rowText}>{item.title}</Text>
    </TouchableOpacity>
  );
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
  },
  pressed: {
    backgroundColor: 'darkgray'
  }
})
