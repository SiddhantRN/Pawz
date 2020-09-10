import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Screen_height = Dimensions.get("window").height;
const Screen_width = Dimensions.get("window").width;

function SectionContainer({
  name,
  iconName,
  color,
  paddingV,
  paddingH,
  txtColor,
  iconColor,
  fontSize,
}) {
  return (
    <View
      style={{
        marginVertical: 8,
        height: Screen_height * 0.075,
        width: Screen_width * 0.95,
        paddingHorizontal: paddingH,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: color,
        borderRadius: 5,
      }}
    >
      <Text style={{ fontSize: fontSize, color: txtColor, fontWeight: "bold" }}>
        {name}
      </Text>
      <MaterialIcons name={iconName} size={24} color={iconColor} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default SectionContainer;
