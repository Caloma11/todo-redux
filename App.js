import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import React from "react";

import { Provider } from "react-redux";
import store from "./redux/stores/store";
import MainNavigator from "./components/mainNavigator";


export default function App() {




  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <MainNavigator />
    </Provider>
  );
}

// Long press delete
// Time updated
// Login logout
