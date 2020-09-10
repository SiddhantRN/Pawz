import React from "react";
import Constants from "expo-constants";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

deviceHeight = Dimensions.get("window").height;
deviceWidth = Dimensions.get("window").width;

function AboutApp({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ position: "absolute", top: 5, left: 5, zIndex: 1 }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="md-arrow-round-back" size={30} color="black" />
      </TouchableOpacity>
      <View
        style={{
          alignItems: "center",
          width: "95%",
          alignSelf: "center",
          marginBottom: Constants.statusBarHeight,
          flex: 1,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: deviceHeight * 0.03 }}>
          A little about our App
        </Text>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://res.cloudinary.com/dy71m2dro/image/upload/v1599066909/Doggo%20App/Others/doggo_and_catto_dl7hwk.png",
          }}
        />
        <ScrollView>
          <Text
            style={{ fontSize: deviceHeight * 0.025, textAlign: "justify" }}
          >
            This app is made to make both the rescuing of animals and adoption
            of rescued animals easier.It can be used by both rescue centers and
            normal people. Normal people/pet enthusiasts can use this app to see
            the animals nearby that are there for adoption,put an animal for
            adoption which they rescued, donate for the cause(to the nearby
            rescue centers),people will be able to donate both in terms of money
            or in terms of supplies needed by these rescue centers.One of the
            main feature will be that if anyone comes across any animal in
            medical need then they'll be able to alert about it which the nearby
            rescue centers will be able to see and then help that animal. {"\n"}
            The PetInfo section will have all the necessary information needed
            for owning and raising a pet like their training ,medical needs,
            proper diets etc.{"\n"}Rescue centers will be able to use this app
            to put animals up for adoptions, see the alerts about the animals in
            need and accept donations by other people.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    height: deviceHeight * 0.3,
    width: deviceWidth,
    borderRadius: deviceHeight * 0.01,
  },
});

export default AboutApp;
