import React from 'react'
import { StyleSheet, FlatList, Dimensions } from 'react-native'
import { useSelector } from "react-redux";
import { selectTodoList } from "../redux/features/todoSlice";
import TodoRow from "./todoRow";


const TodoList = () => {

  const todos = useSelector(selectTodoList);

  const renderItem = ({item}) => <TodoRow item={item} />

  return (
    <FlatList
      data={todos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'pink',
    minHeight: Dimensions.get("window").height,
    minWidth: Dimensions.get("window").width,
    padding: 40,
  }
})

export default TodoList
