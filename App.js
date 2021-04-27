import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
// import InputInteraction from "./components/inputInteraction";
import { Provider } from "react-redux";
import store from "./redux/stores/store";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Screens
import ListScreen from "./screens/listScreen";
import NoteScreen from "./screens/noteScreen";



export default function App() {

  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ListScreen" component={ListScreen} />
          <Stack.Screen name="NoteScreen" component={NoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

