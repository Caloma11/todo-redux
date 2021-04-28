import { StatusBar } from "expo-status-bar";
import React from "react";

import { Provider } from "react-redux";
import store from "./redux/stores/store";
import loadTodoList from "./redux/features/todoSlice";
import MainNavigator from "./components/mainNavigator";

export default function App() {

stored.dispatch(loadTodoList);

  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <MainNavigator />
    </Provider>
  );
}

