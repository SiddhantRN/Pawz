import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native-expo-image-cache";

deviceHeight = Dimensions.get("window").height;
deviceWidth = Dimensions.get("window").width;

function DogList({ dog, buttonName, image = true }) {
  const navigation = useNavigation();
  return (
    <View style={styles.dogListing}>
      {image && (
        <Image
          uri={dog.images[0]}
          preview={{ uri: dog.thumnail }}
          style={styles.dogDp}
        />
      )}
      <View style={styles.dogInfo}>
        <Text style={{ fontWeight: "bold", fontSize: 29 }}>{dog.name}</Text>
        <Text style={{ fontWeight: "bold", fontSize: 19 }}>
          {dog.centerName}
        </Text>

        <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: "5%" }}>
          {dog.age} years old
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>{dog.breed}</Text>
      </View>
      <View
        style={{ position: "absolute", bottom: 13, right: 13, elevation: 3 }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("DogInfoScreen", { doggy: dog })}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: deviceWidth * 0.035,
            }}
          >
            {buttonName}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: "absolute",
          top: 13,
          right: 13,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialIcons name="location-on" size={21} color="black" />
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          {dog.distance} kms away
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#5db075",
    height: deviceHeight * 0.05,
    width: deviceWidth * 0.25,
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",
  },
  dogDp: {
    height: deviceHeight * 0.15,
    width: deviceWidth * 0.3,
    borderRadius: 10,
    overflow: "hidden",
  },
  dogListing: {
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  dogInfo: {
    top: -5,
    marginLeft: "3%",
  },
});

export default DogList;
