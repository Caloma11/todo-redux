import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Dimensions } from 'react-native'
import { useDispatch } from 'react-redux';
import { setCurrentUserToken } from '../redux/features/todoSlice';

const loginScreen = ({ navigation }) => {
  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [errors, setErrors] = useState(null);

  const dispatch = useDispatch();

  const handleData = (data) => {
    if (data.errors) {
      setErrors(data.errors)
    } else {
      setErrors(null)
      dispatch(setCurrentUserToken(data.token));
      navigation.navigate('ListScreen')
    }
  }

  const onPress = () => {
    // fetch("http://localhost:3000/api/v1/auth", {
    fetch("http://aff745a7a6e0.ngrok.io/api/v1/auth", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: { email: email, password: password } }),
    })
      .then((response) => response.json())
      .then((data) => {
        handleData(data)
      })
      .catch((a) => console.log(a));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Username"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
        autoCapitalize="none"
        secureTextEntry={true}
      />
      {errors && <TextInput style={styles.errors}>{errors[0]}</TextInput>}
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={[styles.input, styles.submit]}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

export default loginScreen

const styles = StyleSheet.create({
  input: {
    height: 48,
    margin: 12,
    borderWidth: 1,
    padding: 12,
    borderRadius: 4,
  },
  container: {
    justifyContent: "center",
    padding: 32,
    minWidth: Dimensions.get("window").width,
    height: Dimensions.get("window").height + 40,
    backgroundColor: "#FBB7C0",
    flex: 1,
    position: "absolute",
  },
  submit: {
    textAlign: "center",
    backgroundColor: "#23231A",
    color: "#F3FCF0",
    fontWeight: "bold",
    borderRadius: 8,
    borderColor: "transparent",
  },
  errors: {
    color: "red",
    marginLeft: 12,
  },
});



// Making authenticated requests:



    // fetch("http://localhost:3000/api/v1/notes", {
    //   method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     Authorization:
    //       "token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTYyMTU4NTkwM30.IXlwKJu3qoSb9EIc-T9XvH3UvTQpa9SDNwtDRV7MUao",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((a) => console.log(a));
