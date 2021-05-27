import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import TodoList from "../components/todoList";
import AddNoteButton from "../components/addNoteButton";
import Sidebar from "../components/sidebar";
import { useSelector } from 'react-redux';
import { selectCurrentUserToken, selectSidebarToggled } from '../redux/features/todoSlice';

const ListScreen = ({navigation, loaded}) => {

  const [todoList, setTodoList] = useState([]);
  const currentUserToken = useSelector(selectCurrentUserToken);
  const sidebarToggled = useSelector(selectSidebarToggled);

  // Thunk function
  const fetchTodoList = () => {
      setTodoList([{title: 'Loading...', description: 'Loading...', id: 999 }])

    fetch("http://80d7e2c8b219.ngrok.io/api/v1/notes", {
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
      {
        sidebarToggled && <Sidebar navigation={navigation} />
      }
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
