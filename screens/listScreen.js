import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import TodoList from "../components/todoList";
import AddNoteButton from "../components/addNoteButton";
import { useSelector } from 'react-redux';
import { selectCurrentUserToken } from '../redux/features/todoSlice';

const ListScreen = ({navigation, loaded}) => {

  const [todoList, setTodoList] = useState([]);
  const currentUserToken = useSelector(selectCurrentUserToken);

  // Thunk function
  const fetchTodoList = () => {
      setTodoList([{title: 'Loading...', description: 'Loading...', id: 999 }])

    fetch("http://aff745a7a6e0.ngrok.io/api/v1/notes", {
      headers: {
        Authorization: `token ${currentUserToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTodoList(data);
        console.log(data);
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
