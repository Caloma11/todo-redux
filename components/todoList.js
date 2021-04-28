import React from 'react'
import { StyleSheet, FlatList, Dimensions } from 'react-native'
import { useSelector } from "react-redux";
import { selectTodoList } from "../redux/features/todoSlice";
import TodoRow from "./todoRow";


const TodoList = ({navigation}) => {

  const todos = useSelector(selectTodoList);

  const renderItem = ({ item }) => (
    <TodoRow item={item} navigation={navigation} />
  );

  const data =
    todos.length === 0
      ? []
      : [
          ...todos.slice(0, todos.length - 1),
          { last: true, ...todos[todos.length - 1] },
        ];

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString() }
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#FBB7C0",
    minHeight: Dimensions.get("window").height,
    minWidth: Dimensions.get("window").width,
  },
});

export default TodoList
