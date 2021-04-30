import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import DescriptionInput from "../components/descriptionInput";
import DeleteNoteButton from "../components/deleteNoteButton";

const NoteScreen = ({navigation, toggleLoaded}) => {

  return (
    <View style={styles.container}>
      <DescriptionInput navigation={navigation} />
      <DeleteNoteButton navigation={navigation} toggleLoaded={toggleLoaded} />
    </View>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    minHeight: Dimensions.get("window").height,
    minWidth: Dimensions.get("window").width,
    padding: 40,
    paddingBottom: 60,
    flex: 1,
  },
});
