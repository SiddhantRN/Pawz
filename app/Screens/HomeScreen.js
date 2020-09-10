import React, { useState } from "react";
import Constants from "expo-constants";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import IconContainer from "../Components/IconContainer";
import DonateModal from "../Components/DonateModal";
import ReportModal from "../Components/ReportModal";

const Screen_height = Dimensions.get("window").height;
const Screen_width = Dimensions.get("window").width;

function HomeScreen({ navigation }) {
  const [donateModal, setDonateModal] = useState(false);
  const [reportModal, setReportModal] = useState(false);

  return (
    <View style={styles.container}>
      <DonateModal
        modalVisible={donateModal}
        setModalVisible={setDonateModal}
      />
      <ReportModal
        modalVisible={reportModal}
        setModalVisible={setReportModal}
      />
      <TouchableOpacity
        style={{ position: "absolute", top: 5, left: 5, zIndex: 1 }}
        onPress={() => navigation.navigate("AboutApp")}
      >
        <MaterialIcons name="info" size={28} color="#fff" />
      </TouchableOpacity>
      <Image
        source={require("../assets/homescreen.png")}
        style={styles.image}
        resizeMode={"cover"}
      />
      <View style={styles.articleBox}>
        <Text style={styles.header}>Adopt don’t shop</Text>
        <Text numberOfLines={6} style={styles.body}>
          “Adopt, don’t shop” is a campaign slogan encouraging people to adopt
          dogs from shelters or rescues rather than purchasing a dog from a
          breeder or puppy mill. Over the past few months, I’ve repeatedly been
          asked by friends and colleagues as to where they could buy a dog from.
          My first question to them is, “Why do you want to buy one? Why can’t
          you just adopt a stray or a rescued animal, instead?” And more often
          than not, their instant reactions are those of – “But dogs up for
          adoption are usually unhealthy and sick”, or “I don’t want to buy a
          mix breed or street dog.” or to the extent of saying that they’re not
        </Text>
        <TouchableOpacity
          style={styles.learnMore}
          onPress={() => navigation.navigate("Post")}
        >
          <Text style={{ color: "#5DB075" }}>Learn More {">"} </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.options}>
        <Text style={styles.header}>Take Action</Text>
        <View style={styles.icons}>
          <IconContainer
            icon={require("../assets/icons/cruelty.png")}
            text={"Post Adoption"}
            Screen={"AdoptScreen"}
          />

          <IconContainer
            icon={require("../assets/icons/donate.png")}
            text={"Donate"}
            onPress={() => setDonateModal(true)}
          />
          <IconContainer
            icon={require("../assets/icons/ambulance.png")}
            text={"Animal in need"}
            onPress={() => setReportModal(true)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  articleBox: {
    width: "90%",
    padding: 5,
    height: Screen_height * 0.25,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 8,
    marginTop: "5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  body: {
    marginTop: "2%",
    height: "70%",
    fontSize: Screen_height * 0.021,
  },
  container: {
    flex: 1,

    flexDirection: "column",
    top: Constants.statusBarHeight,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    fontWeight: "bold",
    fontSize: Screen_height * 0.025,
  },

  icons: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    width: "100%",
    borderBottomRightRadius: Screen_width * 0.18,
    height: Screen_height * 0.3,
  },
  options: {
    padding: 10,
    width: "90%",
    height: Screen_height * 0.25,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    marginTop: "5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  learnMore: {
    position: "absolute",
    bottom: Screen_height * 0.01,
    alignSelf: "flex-end",
  },
});

export default HomeScreen;
