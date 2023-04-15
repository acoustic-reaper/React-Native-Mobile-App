import { View, Text, Button, StyleSheet } from "react-native";
import ThreeButtonsRow from "./Button/OurButton";
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DynamicForm from "./dnamicForm";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Stack = createStackNavigator();

export default function App() {
  // const [redirect,setRedirect] = useState()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginForm} />
        <Stack.Screen name="SignupPage" component={SignupForm} />
        <Stack.Screen name="HomePage" component={ThreeButtonsRow} />
      </Stack.Navigator>
    </NavigationContainer>
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
