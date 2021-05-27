import React, { useRef, useState } from "react";
import { StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";

import UndoSelectionButton from './undoSelectionButton';
import DeleteSelectionButton from './deleteSelectionButton';

import { useSelector } from "react-redux";
import { selectCurrentDescription, selectCurrentTitle, selectActiveNote, selectPressedAmount, selectCurrentUserToken } from "../redux/features/todoSlice";
import HeaderInput from "./headerInput";
// Screens
import ListScreen from "../screens/listScreen";
import NoteScreen from "../screens/noteScreen";
import LoginScreen from "../screens/loginScreen";

const MainNavigator = () => {

  const Stack = createStackNavigator();
  const navigationRef = useRef(null);

  const description = useSelector(selectCurrentDescription);
  const title = useSelector(selectCurrentTitle);
  const activeNote = useSelector(selectActiveNote);
  const pressedAmount = useSelector(selectPressedAmount);
  const currentUserToken = useSelector(selectCurrentUserToken);


  const [loaded, setLoaded] = useState(false);

  const backButtonPress = () => {


    if ((!description && !title) || ((activeNote.description === description) && (activeNote.title === title) && activeNote.id)) {
      navigationRef.current?.navigate("ListScreen");
      return;
    }

    const note = {description: description, title: title, id: activeNote.id};

    const urlSuffix = activeNote.id ? `/${activeNote.id}` : ''
    const verb = activeNote.id ? 'PATCH' : 'POST'

    fetch(`http://80d7e2c8b219.ngrok.io/api/v1/notes${urlSuffix}`, {
      method: verb,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `token ${currentUserToken}`,
      },
      body: JSON.stringify({ note: note }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((a) => console.log(a));
    navigationRef.current?.navigate("ListScreen")
    setLoaded(!loaded);
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={currentUserToken ? "ListScreen" : "Login"}>
        <Stack.Screen
          a={9}
          name="ListScreen"
          options={{
            ...headerStyle,
            headerTitle:
              pressedAmount > 0
                ? `${pressedAmount} note${
                    pressedAmount === 1 ? "" : "s"
                  } selected`
                : "Notes",
            headerTitleStyle: { paddingLeft: 16 },
            headerRight: () =>
              pressedAmount === 0 ? null : (
                <DeleteSelectionButton
                  toggleLoaded={() => {
                    setLoaded(!loaded);
                  }}
                />
              ),
            headerLeft: () =>
              pressedAmount === 0 ? null : <UndoSelectionButton />,

            //             (    )
          }}
        >
          {(props) => <ListScreen {...props} loaded={loaded} />}
        </Stack.Screen>

        <Stack.Screen
          name="NoteScreen"
          options={() => ({
            ...headerStyle,
            headerBackTitle: "",
            headerLeft: (props) => (
              <HeaderBackButton {...props} onPress={backButtonPress} />
            ),
            headerTitle: () => <HeaderInput />,
          })}
        >
          {(props) => (
            <NoteScreen
              {...props}
              toggleLoaded={() => {
                setLoaded(!loaded);
              }}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
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
