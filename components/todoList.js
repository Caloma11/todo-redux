import React from 'react'
import { StyleSheet, FlatList, Dimensions } from 'react-native'
import TodoRow from "./todoRow";


const TodoList = ({navigation, todoList}) => {


  const renderItem = ({ item }) => (
    <TodoRow item={item} navigation={navigation} />
  );

  const data =
    todoList.length === 0
      ? []
      : [
          ...todoList.slice(0, todoList.length - 1),
          { last: true, ...todoList[todoList.length - 1] },
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
