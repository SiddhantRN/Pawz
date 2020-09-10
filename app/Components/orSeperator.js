import React from "react";
import { View, StyleSheet, Text } from "react-native";

function OrSeperator({ top }) {
  return (
    <View style={{ flexDirection: "row", marginTop: top }}>
      <View style={styles.line}></View>
      <Text
        style={{
          fontSize: 18,
          color: "#9e9e9e",
          padding: 5,
          fontWeight: "bold",
        }}
      >
        {" "}
        OR{" "}
      </Text>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  line: {
    marginTop: "5%",
    width: "40%",
    height: 1.5,
    backgroundColor: "#9e9e9e",
  },
});

export default OrSeperator;
