import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

import { useDispatch, useSelector } from "react-redux";
import { setCurrentTitle, selectCurrentTitle } from "../redux/features/todoSlice";

const HeaderInput = () => {

  const currentTitle = useSelector(selectCurrentTitle);
  const dispatch = useDispatch();

  const handleChange = (text) => {
    dispatch(setCurrentTitle(text));
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        value={currentTitle}
        onChangeText={handleChange}
        placeholderTextColor="rgba(243, 252, 240, .3)"
        placeholder="Note Title"
      />
    </View>
  );
}

export default HeaderInput

const styles = StyleSheet.create({
  input: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#F3FCF0",
  },
});
