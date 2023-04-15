import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

function SignupForm({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [access_code, setAccess] = useState("");

  const handleSignup = async () => {
    // TODO: Implement signup logic here
    const data = {
      username: username,
      password: password,
      email: email,
      access_code: access_code,
    };

    try {
      const response = await axios.post(
        "https://remote-server-new.onrender.com/signup",
        data
      );
      console.log(response.data);
      // navigation.navigate("HomePage");
    } catch (error) {
      console.log(error.message);
    }
    setEmail("");
    setPassword("");
    setUsername("");
    setIsLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Signup </Text>{" "}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />{" "}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="User name"
        value={username}
        onChangeText={setUsername}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Access code"
        value={access_code}
        onChangeText={setAccess}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}> Signup </Text>{" "}
      </TouchableOpacity>{" "}
     
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
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    marginTop: 20,
  },
  linkText: {
    color: "#007AFF",
    fontSize: 16,
  },
});

export default SignupForm;
