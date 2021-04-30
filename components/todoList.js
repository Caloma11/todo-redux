import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList, Dimensions } from 'react-native'
import TodoRow from "./todoRow";


const TodoList = ({navigation, todoList}) => {

  const [pressedAmount, setPressedAmount] = useState(0);

  useEffect(() => {
    console.log(pressedAmount);
  })

  const renderItem = ({ item }) => (
    <TodoRow
      item={item}
      navigation={navigation}
      setPressedAmount={setPressedAmount}
      pressedAmount={pressedAmount}
       />
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
