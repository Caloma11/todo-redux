import React from 'react'
import { TextInput, StyleSheet, ScrollView } from 'react-native'
import { setCurrentDescription, selectCurrentDescription } from "../redux/features/todoSlice";
import { useSelector, useDispatch } from "react-redux";

const DescriptionInput = () => {

  const description = useSelector(selectCurrentDescription);
  const dispatch = useDispatch();

  const handleChange = (text) => {
    dispatch(setCurrentDescription(text));
  }

  return (
    <ScrollView>

    <TextInput
      style={styles.description}
      value={description}
      placeholder="Note Content"
      onChangeText={handleChange}
      multiline={true}
      scrollEnabled={false} // to make keyboard avoiding works
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  description: {
    marginTop: 32,
    zIndex: 1,
    // backgroundColor: 'red',
    minHeight: 400,
    textAlignVertical: 'top'
  }
})


export default DescriptionInput
