import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import axios from "axios";

const ThreeButtonsRow = () => {
  const [access, setAccess] = useState("");
  const [username,setUser] = useState("");

  const handleAccess = (value) => {
    setAccess(value);
  };
  const handleUser = (value)=>{
    setUser(value);
  }

  const handleShutdown = async () => {
    await axios.post(
      `https://remote-server-new.onrender.com/shutdown?access_code=${access}&command=shutdown&username=${username}`
    );
    setAccess("");
  };

  const handleHybernate = async () => {
    await axios.post(
      `https://remote-server-new.onrender.com/shutdown?access_code=${access}&command=hibernate&username=${username}`
    );
    setAccess("");
  };

  const handleRestart = async () => {
    await axios.post(
      `https://remote-server-new.onrender.com/shutdown?access_code=${access}&command=restart&username=${username}`
    );
    setAccess("");
  };

  const handleLogoff = async () => {
    await axios.post(
      `https://remote-server-new.onrender.com/shutdown?access_code=${access}&command=logoff&username=${username}`
    );
    setAccess("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your user name"
        value={ username }
        onChangeText={handleUser}
      />{" "}
      <TextInput
        style={styles.input}
        placeholder="Enter access code"
        value={access}
        onChangeText={handleAccess}
      />{" "}
      <View style={styles.buttonStyle}>
        <TouchableOpacity style={styles.button} onPress={handleShutdown}>
          <Text style={styles.buttonText}> Shut down </Text>{" "}
        </TouchableOpacity>{" "}
        <TouchableOpacity style={styles.button} onPress={handleLogoff}>
          <Text style={styles.buttonText}> Log Off </Text>{" "}
        </TouchableOpacity>{" "}
        <TouchableOpacity style={styles.button} onPress={handleRestart}>
          <Text style={styles.buttonText}> Restart </Text>{" "}
        </TouchableOpacity>{" "}
        <TouchableOpacity style={styles.button} onPress={handleHybernate}>
          <Text style={styles.buttonText}> Hibernate </Text>{" "}
        </TouchableOpacity>{" "}
      </View>{" "}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 5,
    padding: 8,
    marginHorizontal: 10,
  },
  buttonStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  input: {
    width: "30%",
    height: 40,
    display: "block",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
});

export default ThreeButtonsRow;
