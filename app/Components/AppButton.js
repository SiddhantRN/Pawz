import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

function AppButton({ text, top, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { marginTop: top }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: Dimensions.get("window").height * 0.07,
    width: "90%",
    backgroundColor: "#5DB075",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  text: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "bold",
  },
});

export default AppButton;
