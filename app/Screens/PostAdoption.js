import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as Yup from "yup";

import ImageList from "../Components/ImagePicker";

deviceHeight = Dimensions.get("window").height;
deviceWidth = Dimensions.get("window").width;

function PostAdoption({ navigation }) {
  const validationSchema = Yup.object().shape({
    dogName: Yup.string().required().min(1).label("Name"),
    dogBreed: Yup.string().required().min(1).max(15).label("Breed"),
    dogAge: Yup.number().required().label("Age"),
    dogStory: Yup.string().max(200).label("Story"),
  });
  const [images, setImages] = useState([]);
  const [up, setUp] = useState(false);
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
    navigation.navigate("OwnerDetails", { doggy: values });
  };

  return (
    <Formik
      initialValues={{ dogName: "", dogBreed: "", dogAge: "", dogStory: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,

        handleSubmit,
      }) => (
        <View style={styles.container}>
          <KeyboardAwareScrollView style={{ flex: 1 }}>
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
                  <Text style={styles.headerTxt}>Dog’s details </Text>
                </View>
                <Text style={styles.title}>Post a</Text>
                <Text style={styles.title}>Dog for adoption</Text>

                <Text style={styles.field}>Add Photos</Text>
                <ImageList images={images} setImages={setImages} />
              </>
            )}
            <Text style={styles.field}>Dog’s name</Text>
            <TextInput
              placeholder={"Sally"}
              placeholderTextColor={"#c4c4c4"}
              style={styles.input}
              value={values.dogName}
              onChangeText={handleChange("dogName")}
              onBlur={() => setFieldTouched("dogName")}
            />
            {touched.dogName && errors.dogName && (
              <Text
                style={{
                  fontSize: 12,
                  color: "red",
                  marginLeft: deviceHeight * 0.01,
                }}
              >
                {errors.dogName}
              </Text>
            )}
            <View
              style={{
                flexDirection: "row",
                marginTop: "2%",
                width: "90%",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={styles.field}>Breed</Text>
                <TextInput
                  placeholder={"Labrador"}
                  placeholderTextColor={"#c4c4c4"}
                  style={styles.input2}
                  value={values.dogBreed}
                  onChangeText={handleChange("dogBreed")}
                  onBlur={() => setFieldTouched("dogBreed")}
                />
                {touched.dogBreed && errors.dogBreed && (
                  <Text
                    style={{
                      fontSize: 12,
                      color: "red",
                      marginLeft: deviceHeight * 0.01,
                    }}
                  >
                    {errors.dogBreed}
                  </Text>
                )}
              </View>
              <View>
                <Text style={styles.field}>Age(approx)</Text>
                <TextInput
                  placeholderTextColor={"#c4c4c4"}
                  style={styles.input2}
                  value={values.dogAge}
                  onChangeText={handleChange("dogAge")}
                  onBlur={() => setFieldTouched("dogAge")}
                />
                {touched.dogAge && errors.dogAge && (
                  <Text
                    style={{
                      fontSize: 12,
                      color: "red",
                      marginLeft: deviceHeight * 0.01,
                    }}
                  >
                    {errors.dogAge}
                  </Text>
                )}
              </View>
            </View>
            <Text style={styles.field}>Description</Text>

            <TextInput
              multiline
              placeholder={"Sally"}
              placeholderTextColor={"#c4c4c4"}
              style={styles.input3}
              value={values.dogStory}
              onChangeText={handleChange("dogStory")}
              onBlur={() => setFieldTouched("dogStory")}
            />
            {touched.dogStory && errors.dogStory && (
              <Text
                style={{
                  fontSize: 12,
                  color: "red",
                  marginLeft: deviceHeight * 0.01,
                }}
              >
                {errors.dogStory}
              </Text>
            )}
          </KeyboardAwareScrollView>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Next</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
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
    height: deviceHeight * 0.06,
    width: "90%",
    padding: 5,
    marginLeft: deviceHeight * 0.01,
    backgroundColor: "#fff",
    borderBottomWidth: 2,
    borderColor: "#c4c4c4",
  },
  input3: {
    height: deviceHeight * 0.12,
    textAlignVertical: "top",
    width: "90%",

    padding: 5,
    marginLeft: deviceHeight * 0.01,
    backgroundColor: "#fff",
    borderBottomWidth: 2,
    borderColor: "#c4c4c4",
  },
  input2: {
    height: deviceHeight * 0.06,
    width: deviceWidth * 0.4,
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

export default PostAdoption;
