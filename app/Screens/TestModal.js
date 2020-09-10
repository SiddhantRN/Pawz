import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import DonateModal from "../Components/DonateModal";

const TestModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <DonateModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button2: {
    height: 100,
    width: 300,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    top: Dimensions.get("window").height * 0.3,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    top: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    height: Dimensions.get("window").height * 0.6,
    width: Dimensions.get("window").width * 0.8,
    backgroundColor: "#5db075",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default TestModal;
