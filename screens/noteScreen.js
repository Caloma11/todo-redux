import React from "react";
import { StyleSheet, View, Dimensions, KeyboardAvoidingView } from "react-native";
import DescriptionInput from "../components/descriptionInput";
import DeleteNoteButton from "../components/deleteNoteButton";

const NoteScreen = ({navigation, toggleLoaded}) => {

  return (
  <KeyboardAvoidingView
      behavior={"postion"}
      style={styles.container}
    >
      <DescriptionInput navigation={navigation} />
      <DeleteNoteButton navigation={navigation} toggleLoaded={toggleLoaded} />
    </KeyboardAvoidingView>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    minWidth: Dimensions.get("window").width,
    padding: 40,
    paddingBottom: 60,
    flex: 1,
  },
});
