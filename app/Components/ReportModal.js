import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  Dimensions,
  View,
  Image,
} from "react-native";

const Screen_height = Dimensions.get("window").height;
const Screen_width = Dimensions.get("window").width;

function DonateModal({ modalVisible, setModalVisible }) {
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <Text style={styles.modalText}>Report</Text>
          <Image
            source={require("../assets/icons/need.png")}
            style={styles.dog}
            resizeMode={"contain"}
          />
          <View style={{ width: "95%", marginTop: "7%" }}>
            <Text style={styles.text}>
              If you ever come across an animal in medical need , that needs to
              be rescued you'll be able to report about it in this section. By
              just entering a few details like the location of animal,few
              photos,little bit of description and your contact details ,all the
              rescue centers nearby will be notified about the animal and will
              be able to come and rescue it , your small action can save a life.
            </Text>
          </View>
          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: "#5db075" }}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={styles.textStyle}>Done</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    height: Screen_height * 0.7,
    width: Screen_width * 0.8,
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 15,
    marginTop: Screen_height * 0.15,
  },
  dog: {
    height: Screen_height * 0.1,
    width: Screen_height * 0.1,
    marginTop: "7%",
  },
  openButton: {
    backgroundColor: "#5db075",
    height: Screen_height * 0.05,
    borderRadius: 10,
    justifyContent: "center",
    width: Screen_height * 0.1,
    elevation: 2,
    position: "absolute",
    bottom: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    alignSelf: "center",
    textAlign: "justify",

    fontSize: Screen_height * 0.022,
  },
  modalText: {
    fontSize: Screen_height * 0.04,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default DonateModal;
