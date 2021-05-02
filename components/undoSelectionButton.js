import React from 'react'
import { StyleSheet } from 'react-native'
import {HeaderBackButton} from "@react-navigation/stack";
import { useDispatch } from "react-redux";
import { resetPressedAmount } from "../redux/features/todoSlice";

const UndoSelectionButton = () => {

  const dispatch = useDispatch();

  const handlePress = (e) => {
    dispatch(resetPressedAmount(''));
  }

  return (
    <HeaderBackButton onPress={handlePress} tintColor={"white"}/>
  )
}

export default UndoSelectionButton

const styles = StyleSheet.create({})
