import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

function ResourceContainer({ onClose }) {
  return (
    <View style={styles.resourceContainer}>
      <View style={styles.resources}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.heading}>Related Videos</Text>
          <Entypo name="cross" size={28} color="black" onPress={onClose} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: "bold",
  },
  resourceContainer: {
    position: "absolute",
    bottom: 0,
    zIndex: 2,
  },
  resources: {
    height: Dimensions.get("window").height * 0.3,
    width: Dimensions.get("window").width,
    backgroundColor: "#e0e0e0",
    padding: 8,
  },
});

export default ResourceContainer;
