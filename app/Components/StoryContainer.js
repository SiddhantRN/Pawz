import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Screen_height = Dimensions.get("window").height;
const Screen_width = Dimensions.get("window").width;

function StoryContainer({ title, description }) {
  return (
    <TouchableOpacity>
      <View style={styles.storyBox}>
        <Text
          style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}
          numberOfLines={2}
        >
          {title}
        </Text>
        <Text style={{ fontSize: 15 }} numberOfLines={4}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  storyBox: {
    height: Screen_height * 0.2,
    width: Screen_width * 0.4,
    backgroundColor: "#e0e0e0",
    marginRight: 18,
    borderRadius: 8,
    marginTop: 8,
    padding: 8,
  },
});

export default StoryContainer;
