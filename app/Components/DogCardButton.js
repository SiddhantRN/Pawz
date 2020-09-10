import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Screen_height = Dimensions.get("window").height;
const Screen_width = Dimensions.get("window").width;

function DogCardButton({ dog, dogName }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("DogInfoScreen", {
          doggy: dog,
        })
      }
      style={styles.button1}
    >
      <Text
        style={{
          fontSize: Screen_height * 0.023,
          color: "#F7A826",
          fontWeight: "bold",
        }}
      >
        Know More About
      </Text>
      <Text
        style={{
          fontSize: Screen_height * 0.023,
          color: "#F7A826",
          fontWeight: "bold",
        }}
      >
        {dogName}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button1: {
    height: Screen_height * 0.08,
    width: Screen_width * 0.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    borderRadius: 30,
    backgroundColor: "#fff",
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DogCardButton;
