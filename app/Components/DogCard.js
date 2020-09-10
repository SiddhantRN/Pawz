import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native-expo-image-cache";

const Screen_height = Dimensions.get("window").height;

function DogCard({
  name,
  age,
  rescueCenter,
  distance,
  breed,
  image,
  story,
  thumnail,
}) {
  return (
    <View style={styles.container1}>
      <Image
        style={{ height: "60%", width: "100%" }}
        uri={image}
        preview={{ uri: thumnail }}
      />
      <View style={{ paddingHorizontal: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: Screen_height * 0.05,
              flex: 1,
            }}
          >
            {name}
          </Text>
          <MaterialIcons name="location-on" size={21} color="black" />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: Screen_height * 0.022,
            }}
          >
            {distance}km away
          </Text>
        </View>
        <Text style={{ fontWeight: "bold", fontSize: Screen_height * 0.022 }}>
          {age} years old {breed}
        </Text>

        <Text
          style={{
            fontWeight: "bold",
            fontSize: Screen_height * 0.022,
          }}
        >
          {rescueCenter}
        </Text>

        <Text
          style={{
            color: "#7A8A94",
            fontSize: Screen_height * 0.02,
            marginTop: "1%",
          }}
          numberOfLines={5}
        >
          {story}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
    borderColor: "#e0e0e0",
    borderWidth: 1,
    flex: 1,
  },
});

export default DogCard;
