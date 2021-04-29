import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import TodoList from "../components/todoList";
import AddNoteButton from "../components/addNoteButton";
import { useDispatch } from "react-redux";
import { fetchTodoList } from "../redux/features/todoSlice";


const ListScreen = ({navigation}) => {

  const dispatch = useDispatch();


  useEffect(() => {
    // console.log(loadTodoList);
    console.log("!!!")
    dispatch(fetchTodoList(""));
  }, []);


  return (
    <View style={styles.container}>
      <TodoList navigation={navigation} />
      <AddNoteButton navigation={navigation} />
    </View>
  );
}

export default ListScreen;


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
