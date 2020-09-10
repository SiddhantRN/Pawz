import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import PetInfo from "../Screens/PetInfoScreen";

import PostNavigator from "./PostNavigator";
import AdoptNavigator from "./AdoptNavigator";
import ProfileNavigator from "./ProfileNavigator";

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : "";

    if (routeName === "Post") {
      return false;
    } else if (routeName === "DogCardScreen") {
      return false;
    } else if (routeName === "DogInfoScreen") {
      return false;
    } else if (routeName === "Edit") {
      return false;
    } else if (routeName === "AdoptScreen") {
      return false;
    } else if (routeName === "OwnerDetails") {
      return false;
    } else if (routeName === "AboutApp") {
      return false;
    }

    return true;
  };
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#5DB075",
        inactiveTintColor: "#9e9e9e",

        style: {
          backgroundColor: "#eeeeee",
        },
        labelStyle: {
          fontWeight: "bold",
          bottom: 5,
        },
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={PostNavigator}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={24}
              color={focused ? "#5DB075" : "#9e9e9e"}
            />
          ),
        })}
      />
      <Tab.Screen
        name={"Adopt"}
        component={AdoptNavigator}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="paw"
              size={24}
              color={focused ? "#5DB075" : "#9e9e9e"}
            />
          ),
        })}
      />

      <Tab.Screen
        name={"PetInfo"}
        component={PetInfo}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="bone"
              size={23}
              color={focused ? "#5DB075" : "#9e9e9e"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={ProfileNavigator}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="account"
              size={26}
              color={focused ? "#5DB075" : "#9e9e9e"}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppNavigator;
