import React from "react";
import { View, StyleSheet } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import HomeScreen from "../Screens/HomeScreen";
import PostScreen from "../Screens/PostScreen";
import PostAdoption from "../Screens/PostAdoption";
import OwnerDetails from "../Screens/OwnerDetails";
import AboutApp from "../Screens/AboutApp";

const Stack = createStackNavigator();

function PostNavigator(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,

        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName={"Home"}
    >
      <Stack.Screen component={HomeScreen} name={"Home"} />
      <Stack.Screen component={PostScreen} name={"Post"} />
      <Stack.Screen component={AboutApp} name={"AboutApp"} />
      <Stack.Screen component={PostAdoption} name={"AdoptScreen"} />
      <Stack.Screen component={OwnerDetails} name={"OwnerDetails"} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default PostNavigator;
