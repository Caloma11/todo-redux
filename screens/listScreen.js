import React from 'react'
import { StyleSheet, View } from 'react-native'
import TodoList from "../components/todoList";
import AddNoteButton from "../components/addNoteButton";

const ListScreen = ({navigation}) => {
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
