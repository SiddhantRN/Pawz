import React from "react";
import { View, StyleSheet } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import ProfileScreen from "../Screens/ProfileScreen";
import EditProfile from "../Screens/EditProfile";

const Stack = createStackNavigator();

function ProfileNavigator(props) {
  return (
    <Stack.Navigator
      mode={"modal"}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName={"Home"}
    >
      <Stack.Screen component={ProfileScreen} name={"Profile"} />
      <Stack.Screen component={EditProfile} name={"Edit"} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ProfileNavigator;
