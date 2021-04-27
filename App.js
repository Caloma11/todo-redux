import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
// import InputInteraction from "./components/inputInteraction";
import { Provider } from "react-redux";
import store from "./redux/stores/store";
import TodoList from "./components/todoList";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />

      <View style={styles.container}>
        <TodoList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
