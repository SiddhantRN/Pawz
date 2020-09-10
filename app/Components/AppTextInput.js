import React from "react";
import { View, StyleSheet, TextInput, Dimensions } from "react-native";

function AppTextInput({ text, top, ...otherProps }) {
  return (
    <TextInput
      style={[styles.input, { marginTop: top }]}
      placeholder={text}
      placeholderTextColor={"#9e9e9e"}
      {...otherProps}
    ></TextInput>
  );
}

const styles = StyleSheet.create({
  container: {},
  input: {
    width: "90%",

    height: Dimensions.get("window").height * 0.07,
    backgroundColor: "#F5F5F5",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
});

export default AppTextInput;
