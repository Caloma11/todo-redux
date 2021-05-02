import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveNote, selectPressedAmount, incrementPressedAmount, decrementPressedAmount, addSelectedTodo, clearSelectedTodos, removeSelectedTodo } from "../redux/features/todoSlice";


const TodoRow = ({item, navigation }) => {

  const dispatch = useDispatch();

  const [pressed, setPressed] = useState(false);

  const pressedAmount = useSelector(selectPressedAmount);

  const isLast = item.last ? styles.last : {};
  const isPressed = pressed ? styles.pressed : {};


  useEffect(() => {
    console.log(item)
    if (pressedAmount === 0) {
      setPressed(false);
    }
  }, [pressedAmount])

  const handlePress = (isShort = true) => {

    if (pressedAmount === 0 && isShort)  {
      dispatch(setActiveNote(item));
      navigation.navigate("NoteScreen");
    } else {
      setPressed(!pressed);

      if (pressed) {
        dispatch(decrementPressedAmount(''));
        dispatch(removeSelectedTodo(item))
        if (pressedAmount === 1) {
          dispatch(clearSelectedTodos(""));
        };
      } else {
        dispatch(incrementPressedAmount(''))
        dispatch(addSelectedTodo(item))
      }
    }
  };


  const handleLongPress = () => {
    handlePress(false);
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
