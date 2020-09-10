import React from "react";
import { View, StyleSheet } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import AppNavigator from "./AppNavigator";
import RegisterScreen from "../Screens/RegisterScreen";

const Stack = createStackNavigator();

function AuthNavigator(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"Authentication"} component={RegisterScreen} />
      <Stack.Screen name={"App"} component={AppNavigator} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AuthNavigator;
