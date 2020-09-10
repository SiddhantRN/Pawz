import React, { useState } from "react";
import Constants from "expo-constants";
import { View, StyleSheet, Text, Dimensions, ScrollView } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import ResourceContainer from "../Components/ResourceContainer";

function SectionScreen(props) {
  const [boxVisible, setBoxVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={() => setBoxVisible(true)}
        >
          <FontAwesome name="play" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      {boxVisible && <ResourceContainer onClose={() => setBoxVisible(false)} />}
      <View style={styles.header}>
        <Text style={styles.heading}>TRAINING</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.article}>
          <Text numberOfLines={1} style={styles.title}>
            Post Title Here...
          </Text>
          <Text numberOfLines={2} style={styles.author}>
            Author name
          </Text>

          <ScrollView>
            <Text style={styles.post}>
              Labore sunt veniam amet est. Minim nisi dolor eu ad incididunt
              cillum elit ex ut. Dolore exercitation nulla tempor consequat
              aliquip occaecat. Nisi id ipsum irure aute. Deserunt sit aute
              irure quis nulla eu consequat fugiat Lorem sunt magna et consequat
              labore. Laboris incididunt id Lorem est duis deserunt nisi dolore
              eiusmod culpa exercitation consectetur. Fugiat do aliqua laboris
              cillum sint dolor officia adipisicing excepteur fugiat officia.
              Cupidatat ut elit consequat ea laborum occaecat laborum aute
              consectetur Lorem exercitation. Lorem anim minim officia aliquip
              commodo deserunt mollit. Duis deserunt quis cillum voluptate duis
              ipsum quis incididunt elit excepteur excepteur labore duis cillum.
              Voluptate sint nulla minim eiusmod in nulla. Ea id ad duis esse
              adipisicing culpa ex esse ea dolore consequat. Reprehenderit eu
              minim veniam aliquip do ipsum duis do qui adipisicing aliquip ad
              occaecat. Enim reprehenderit sunt do do. Ex fugiat nisi sit anim
              culpa nisi. Non labore fugiat culpa magna. Commodo esse Lorem ex
              duis do et do. Est laboris cupidatat ad est anim adipisicing sit
              labore do dolor officia. Fugiat consequat in excepteur
              reprehenderit id aliquip voluptate sint enim proident aliquip
              occaecat quis non. Ad nulla aliqua est amet aliqua sint est
              occaecat amet sunt. Ullamco laborum qui sint officia officia ad
              Lorem culpa minim voluptate occaecat id duis esse. Ullamco sunt
              magna consectetur excepteur. Id cupidatat proident ex ad elit
              laboris. Nulla aute sit occaecat laboris. Laboris minim aliquip
              exercitation elit commodo ipsum et fugiat sit anim laborum
              proident cillum laboris. Et cillum tempor esse sit anim et veniam.
              Tempor magna irure ex ea id fugiat. Ex eu sint tempor quis
              exercitation amet ut deserunt sit fugiat aliquip nostrud nulla. Eu
              sunt laborum elit consectetur tempor sunt dolore in sunt
              reprehenderit voluptate dolore adipisicing. Proident eiusmod
              reprehenderit quis sint exercitation voluptate non labore. Sunt
              non sint in Lorem occaecat dolore tempor ipsum et proident sit
              Lorem ipsum officia.
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  article: {
    width: "93%",
    marginTop: "6%",
    alignSelf: "center",
  },
  author: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: "1%",
  },
  body: {
    flex: 0.92,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  button: {
    height: Dimensions.get("window").width * 0.13,
    width: Dimensions.get("window").width * 0.13,
    borderRadius: Dimensions.get("window").width * 0.075,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5db075",
  },
  buttonContainer: {
    position: "absolute",
    bottom: Dimensions.get("window").height * 0.1,
    right: Dimensions.get("window").width * 0.1,
    zIndex: 1,
  },

  container: {
    top: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#5db075",
  },
  header: {
    flex: 0.08,
  },
  heading: {
    fontSize: 45,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  post: {
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default SectionScreen;
