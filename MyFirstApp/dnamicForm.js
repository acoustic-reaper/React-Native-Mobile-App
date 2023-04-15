import { View, Text, Button, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import SignUp from "./SignupForm";
import MyLoginForm from "./LoginForm";
import React, { useState } from "react";

export default function DynamicForm({ navigation }) {
  const [isSignup, setIsSignup] = useState(false);
  const toggleForm = () => {
    setIsSignup(!isSignup);
  };
  return (
    <View style={styles.container}>
      {" "}
      {isSignup ? (
        <SignUp option={navigation} buttonText="Sign up" />
      ) : (
        <MyLoginForm option={navigation} buttonText="Login" />
      )}{" "}
      <Button
        title={isSignup ? "Switch to Login" : "Switch to Signup"}
        onPress={toggleForm}
      />{" "}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
