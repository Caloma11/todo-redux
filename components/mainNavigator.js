import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import { useDispatch } from "react-redux";
import { updateActiveNote } from "../redux/features/todoSlice";
import HeaderInput from "./headerInput";
// Screens
import ListScreen from "../screens/listScreen";
import NoteScreen from "../screens/noteScreen";

const MainNavigator = () => {

  const Stack = createStackNavigator();
  const dispatch = useDispatch();
  const navigationRef = useRef(null);

  const backButtonPress = () => {
    dispatch(updateActiveNote(""));
    navigationRef.current?.navigate("ListScreen");
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="ListScreen"
          component={ListScreen}
          options={{
            ...headerStyle,
            headerTitle: "Notes",
            headerTitleStyle: { paddingLeft: 16 },
          }}
        />
        <Stack.Screen
          name="NoteScreen"
          component={NoteScreen}
          options={() => ({
            ...headerStyle,
            headerBackTitle: "",
            headerLeft: (props) => (
              <HeaderBackButton {...props} onPress={backButtonPress} />
            ),
            headerTitle: () => <HeaderInput />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const headerStyle = {
  headerTintColor: "#F3FCF0",
  headerStyle: {
    backgroundColor: "#23231A",
  },
};

export default MainNavigator;

const styles = StyleSheet.create({});
