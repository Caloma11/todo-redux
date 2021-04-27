import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

const NoteScreen = ({route}) => {

  const note = route.params.note;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.description}>{note.description}</Text>
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
  },
  title: {
    fontWeight: 'bold'
  },
  description: {
    marginTop: 32,
  }
});
