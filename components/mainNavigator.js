import React, { useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { selectCurrentDescription, selectCurrentTitle, selectActiveNote } from "../redux/features/todoSlice";
import HeaderInput from "./headerInput";
// Screens
import ListScreen from "../screens/listScreen";
import NoteScreen from "../screens/noteScreen";

const MainNavigator = () => {

  const Stack = createStackNavigator();
  const navigationRef = useRef(null);

  const description = useSelector(selectCurrentDescription);
  const title = useSelector(selectCurrentTitle);
  const activeNote = useSelector(selectActiveNote);

  const [loaded, setLoaded] = useState(false);

  // const toggleLoaded = setLoaded(!loaded);

  const backButtonPress = () => {

    if ((activeNote.description === description) && (activeNote.title === title) && activeNote.id) {
      navigationRef.current?.navigate("ListScreen");
      console.log("im here")
      return;
    }

    const note = {description: description, title: title, id: activeNote.id};

    const urlSuffix = activeNote.id ? `/${activeNote.id}` : ''
    const verb = activeNote.id ? 'PATCH' : 'POST'

    fetch(`https://polar-reaches-33143.herokuapp.com/api/v1/notes${urlSuffix}`, {
    method: verb,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ note: note})
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
      <Stack.Navigator>
        <Stack.Screen
          a={9}
          name="ListScreen"
          options={{
            ...headerStyle,
            headerTitle: "Notes",
            headerTitleStyle: { paddingLeft: 16 },
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
        {(props) => <NoteScreen {...props} toggleLoaded={() => { setLoaded(!loaded) }} />}
        </Stack.Screen>
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
