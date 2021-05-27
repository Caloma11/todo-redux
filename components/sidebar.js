import React, { useEffect, useRef } from 'react'
import { StyleSheet, Dimensions, View, Animated, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUserToken, setSidebarToggled } from '../redux/features/todoSlice';


const Sidebar = ({ navigation }) => {
  const goLeftAnim = useRef(new Animated.Value(-200)).current;
  const dispatch = useDispatch();


  useEffect(() => {
    Animated.timing(goLeftAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [goLeftAnim])


  const logout = () => {
    dispatch(setSidebarToggled(false));
    dispatch(setCurrentUserToken(null));
    navigation.push('Login');
  }

  const dismiss = () => {
    dispatch(setSidebarToggled(false));
  }

  return (
    <Animated.View style={[styles.wrapper, { left: goLeftAnim }]}>
      <View style={styles.leftContainer}>
        <TouchableOpacity style={styles.row} onPress={logout}>
          <Ionicons name="exit-outline" size={24} color="black" />
          <Text>Sign out</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={dismiss}>
        <View style={[styles.rightContainer]}></View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Sidebar

const styles = StyleSheet.create({
  leftContainer: {
    height: Dimensions.get("window").height,
    width: 240,
    backgroundColor: "#FBB7C0",
  },
  wrapper: {
    position: "absolute",
    top: 0,
    zIndex: 8,
    width: Dimensions.get("window").width,
    flexDirection: "row",
  },
  rightContainer: {
    backgroundColor: "#23231A",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width - 240,
    opacity: 0.3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingRight: 48,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, .1)",
  }
});
