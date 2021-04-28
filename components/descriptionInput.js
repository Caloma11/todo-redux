import React from 'react'
import { TextInput, StyleSheet, Dimensions } from 'react-native'
import { setCurrentDescription, selectCurrentDescription } from "../redux/features/todoSlice";
import { useSelector, useDispatch } from "react-redux";

const DescriptionInput = () => {

  const description = useSelector(selectCurrentDescription);
  const dispatch = useDispatch();

  const handleChange = (text) => {
    dispatch(setCurrentDescription(text));
  }

  return (
    <TextInput
      style={styles.description}
      value={description}
      placeholder="Note Content"
      onChangeText={handleChange}
      multiline={true}
    />
  );
}

const styles = StyleSheet.create({
  description: {
    marginTop: 32,
    // marginBottom:
    zIndex: 1,
  }
})


export default DescriptionInput
