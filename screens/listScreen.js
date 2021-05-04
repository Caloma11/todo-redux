import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import TodoList from "../components/todoList";
import AddNoteButton from "../components/addNoteButton";


const ListScreen = ({navigation, loaded}) => {

  const [todoList, setTodoList] = useState([]);

  // Thunk function
  const fetchTodoList = () => {
      setTodoList([{title: 'Loading...', description: 'Loading...', id: 999 }])

    fetch("https://polar-reaches-33143.herokuapp.com/api/v1/notes")
      .then((response) => response.json())
      .then((data) => {
        setTodoList(data);
      })
      .catch((a) => console.log(a));
  };

  useEffect(() => {
    fetchTodoList();
  }, [loaded]);

  return (
    <View style={styles.container}>
      <TodoList navigation={navigation} todoList={todoList}/>
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
