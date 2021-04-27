import React from 'react';
import { View, StyleSheet } from 'react-native';
import Input from "./input";
import AddNoteButton from "./addNoteButton";


const inputInteraction = () => {
  return (
    <View>
      <Input />
      <AddNoteButton />
    </View>
  )
}

const styles = StyleSheet.create({

})

export default inputInteraction
