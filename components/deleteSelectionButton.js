import React from "react";
import { StyleSheet, Button } from "react-native";

const DeleteSelectionButton = () => {
  return (
    <Button
      onPress={() => alert("This is deelte a button!")}
      title="Info"
      color="#ff000"
    />
  );
};

export default DeleteSelectionButton;

const styles = StyleSheet.create({});
