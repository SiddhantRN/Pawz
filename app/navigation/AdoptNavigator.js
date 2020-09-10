import React from "react";
import { View, StyleSheet } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import AdoptListScreen from "../Screens/AdoptListScreen";
import DogInfoScreen from "../Screens/DogInfoScreen";
import DogCardScreen from "../Screens/DogCardScreen";

const Stack = createStackNavigator();

function AdoptNavigator(props) {
  return (
    <Stack.Navigator
      mode={"modal"}
      screenOptions={{
        headerShown: false,

        gestureDirection: "horizontal",

        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName={"AdoptListScreen"}
    >
      <Stack.Screen component={AdoptListScreen} name={"AdoptListScreen"} />
      <Stack.Screen component={DogCardScreen} name={"DogCardScreen"} />
      <Stack.Screen component={DogInfoScreen} name={"DogInfoScreen"} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AdoptNavigator;
