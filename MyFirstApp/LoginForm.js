import axios from "axios";

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
Button,
  TextInput,
  TouchableOpacity,
} from "react-native";

function LoginForm({navigation}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
const toggleForm = ()=>{
navigation.navigate('SignupPage')
}

  const handleLogin = async () => {
    
    // TODO: Implement login logic here
    const data = {
      username: username,
      password: password,
    };
    await axios
      .post("https://remote-server-new.onrender.com/login", data)
      .then((response) => {
        if (response.data[0] != "u") {
          console.log(response.data);
          navigation.navigate('HomePage')
        } else {
          alert("Incorrect credentials");
          Alert.alert("Error", "Incorrect username or password", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        }
        // handle successful login
      })
      .catch((error) => {
        // handle login failure
        console.log(error);
      });

    // setIsLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Login </Text>{" "}
      <TextInput
        style={styles.input}
        placeholder="User name"
        value={username}
        onChangeText={setUsername}
      />{" "}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}> Login </Text>{" "}
      </TouchableOpacity>{" "}
<Button
        title="Switch to Signup"
        onPress={toggleForm}
      />{" "}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "30%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 60
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LoginForm;
