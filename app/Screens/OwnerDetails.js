import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";
import Constants from "expo-constants";
import ConfirmationModal from "../Components/ConfirmationModal";

deviceHeight = Dimensions.get("window").height;
deviceWidth = Dimensions.get("window").width;

function OwnerDetails({ navigation, route }) {
  const validationSchema = Yup.object().shape({
    ownerName: Yup.string().required().max(20).label("Name"),
    city: Yup.string().required().max(30).label("City"),
    ownerPhone: Yup.number().required().label("Phone Number"),
    ownerAddress: Yup.string().required().max(200).label("Address"),
  });
  const [up, setUp] = useState(false);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardUp);
    Keyboard.addListener("keyboardDidHide", keyboardDown);

    return () => {
      Keyboard.removeListener("keyboardDidShow", keyboardUp);
      Keyboard.removeListener("keyboardDidHide", keyboardDown);
    };
  }, []);

  const keyboardUp = () => {
    setUp(true);
  };
  const keyboardDown = () => {
    setUp(false);
  };
  const handleSubmit = (values) => {
    setModal(true);
  };

  return (
    <>
      <ConfirmationModal modalVisible={modal} setModalVisible={setModal} />
      <Formik
        initialValues={{
          ownerName: "",
          ownerPhone: "",
          ownerAddress: "",
          city: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
        }) => (
          <View style={styles.container}>
            {!up && (
              <>
                <View style={styles.header}>
                  <Ionicons
                    name="md-arrow-round-back"
                    size={30}
                    color="#5DB075"
                    style={{ position: "absolute", left: 5 }}
                    onPress={() => navigation.goBack()}
                  />
                  <Text style={styles.headerTxt}>Owner’s details </Text>
                </View>
                <Text style={styles.title}>Post a</Text>
                <Text style={styles.title}>Dog for adoption</Text>
              </>
            )}

            <Text style={styles.field}>Owner’s name</Text>
            <TextInput
              placeholderTextColor={"#c4c4c4"}
              style={styles.input}
              value={values.ownerName}
              onChangeText={handleChange("ownerName")}
              onBlur={() => setFieldTouched("ownerName")}
            />
            {touched.ownerName && errors.ownerName && (
              <Text
                style={{
                  fontSize: 12,
                  color: "red",
                  marginLeft: deviceHeight * 0.01,
                }}
              >
                {errors.ownerName}
              </Text>
            )}
            <Text style={styles.field}>Owner’s Phone Number</Text>
            <TextInput
              placeholderTextColor={"#c4c4c4"}
              style={styles.input}
              keyboardType={"number-pad"}
              value={values.ownerPhone}
              onChangeText={handleChange("ownerPhone")}
              onBlur={() => setFieldTouched("ownerPhone")}
            />
            {touched.ownerPhone && errors.ownerPhone && (
              <Text
                style={{
                  fontSize: 12,
                  color: "red",
                  marginLeft: deviceHeight * 0.01,
                }}
              >
                {errors.ownerPhone}
              </Text>
            )}
            <Text style={styles.field}>Address</Text>

            <TextInput
              multiline
              placeholderTextColor={"#c4c4c4"}
              style={styles.input3}
              value={values.ownerAddress}
              onChangeText={handleChange("ownerAddress")}
              onBlur={() => setFieldTouched("ownerAddress")}
            />
            {touched.ownerAddress && errors.ownerAddress && (
              <Text
                style={{
                  fontSize: 12,
                  color: "red",
                  marginLeft: deviceHeight * 0.01,
                }}
              >
                {errors.ownerAddress}
              </Text>
            )}
            <Text style={styles.field}>City</Text>
            <TextInput
              placeholderTextColor={"#c4c4c4"}
              style={styles.input2}
              value={values.city}
              onChangeText={handleChange("city")}
              onBlur={() => setFieldTouched("city")}
            />
            {touched.city && errors.city && (
              <Text
                style={{
                  fontSize: 12,
                  color: "red",
                  marginLeft: deviceHeight * 0.01,
                }}
              >
                {errors.city}
              </Text>
            )}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Post</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    height: deviceHeight * 0.065,
    width: deviceWidth * 0.9,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#5db075",
    borderRadius: 10,

    position: "absolute",
    bottom: Constants.statusBarHeight + 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    top: Constants.statusBarHeight,
  },
  field: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: "3%",
    marginLeft: deviceHeight * 0.01,
  },
  header: {
    marginTop: "2%",
    marginBottom: "2%",
    flexDirection: "row",
    justifyContent: "center",
  },
  headerTxt: {
    fontSize: deviceHeight * 0.03,
    fontWeight: "bold",
  },
  input: {
    height: deviceHeight * 0.05,
    width: "90%",
    padding: 5,
    marginLeft: deviceHeight * 0.01,
    backgroundColor: "#fff",
    borderBottomWidth: 2,
    borderColor: "#c4c4c4",
  },
  input2: {
    height: deviceHeight * 0.05,
    textAlignVertical: "top",
    width: "90%",

    padding: 5,
    marginLeft: deviceHeight * 0.01,
    backgroundColor: "#fff",
    borderBottomWidth: 2,
    borderColor: "#c4c4c4",
  },
  input3: {
    height: deviceHeight * 0.065,
    textAlignVertical: "top",
    width: "90%",

    padding: 5,
    marginLeft: deviceHeight * 0.01,
    backgroundColor: "#fff",
    borderBottomWidth: 2,
    borderColor: "#c4c4c4",
  },

  title: {
    fontSize: deviceHeight * 0.045,
    marginLeft: deviceHeight * 0.01,
    fontWeight: "bold",
  },
});

export default OwnerDetails;
