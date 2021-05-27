import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Dimensions, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUserToken } from '../redux/features/todoSlice';
import { Foundation } from "@expo/vector-icons";


const loginScreen = ({ route, navigation }) => {
  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    // if (currentUserToken) {
    //   navigation.addListener('beforeRemove', (e) => {
    //     e.preventDefault();
    //   })
    // }
  }, [])

  const handleData = (data) => {
    if (data.errors) {
      setErrors(data.errors)
    } else {
      setErrors(null)
      console.log({token: data.token})
      dispatch(setCurrentUserToken(data.token));
      navigation.navigate('ListScreen')
    }
    setLoading(false);
  }

  const onPress = () => {
    // fetch("http://localhost:3000/api/v1/auth", {
    setLoading(true);
    fetch("http://80d7e2c8b219.ngrok.io/api/v1/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: { email: email, password: password } }),
    })
      .then((response) => response.json())
      .then((data) => {
        handleData(data);
      })
      .catch((a) => console.log(a));
  };

  return (
    <View style={styles.container}>
      <View style={styles.centeredContainer}>
        <Foundation
          name="clipboard-pencil"
          size={120}
          color="black"
          style={styles.clipboard}
        />
        {loading && <ActivityIndicator size="large" color="#23231A" style={styles.loader} />}
      </View>
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
    paddingTop: 0
  },
  centeredContainer: {
    alignItems: 'center',
    marginTop: -120,
    paddingBottom: 64
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
  cliboard: {
    margin: 'auto'
  },
  loader: {
    position: 'absolute',
    top: -64,
    right: 0
  }
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
