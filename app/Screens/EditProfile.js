import React, { useState, useEffect } from "react";
import Constants from "expo-constants";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Keyboard,
} from "react-native";
import { YellowBox } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

deviceHeight = Dimensions.get("window").height;

YellowBox.ignoreWarnings([
  "Non-serializable values were found in the navigation state",
]);

function EditProfile({ navigation, route }) {
  const [userName, setUserName] = useState(route.params.name);
  const [email, setUserEmail] = useState(route.params.mail);
  const [phone, setPhone] = useState(route.params.number);
  const [up, setUp] = useState(false);
  const [pik, setPik] = useState(route.params.image);
  const requestpermission = async () => {
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!result.granted) {
      alert("you need to enable permission to access library");
    }
  };

  useEffect(() => {
    requestpermission();
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
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });
      if (!result.cancelled) {
        setPik(result.uri);
        route.params.onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("error reading an image", error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile", { uri: pik })}
          >
            <Text style={{ color: "#fff", left: 10, fontSize: 18 }}>Back</Text>
          </TouchableOpacity>

          <Text
            style={{
              color: "#fff",
              left: 5,
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            Edit Profile
          </Text>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ color: "#fff", right: 10, fontSize: 18 }}>Save</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profilePik}>
          <Image
            source={
              pik
                ? { uri: pik }
                : {
                    uri:
                      "https://res.cloudinary.com/dy71m2dro/image/upload/v1599067286/Doggo%20App/Others/owner_gm6bkw.png",
                  }
            }
            style={styles.profileImage}
            resizeMode={"cover"}
          />
          <TouchableOpacity style={styles.edit} onPress={selectImage}>
            <MaterialIcons name="edit" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={up ? styles.kfield : styles.field}>
        <Text style={styles.fieldName}>Name</Text>
        <TextInput
          style={styles.fieldValue}
          onChangeText={(text) => {
            route.params.onChangeName(text);
            setUserName(text);
          }}
          value={userName}
          placeholderTextColor="#000"
        />
      </View>
      <View style={up ? styles.kfield1 : styles.field1}>
        <Text style={styles.fieldName}>E-mail</Text>
        <TextInput
          style={styles.fieldValue}
          value={email}
          onChangeText={(text) => {
            route.params.onChangeEmail(text);
            setUserEmail(text);
          }}
          placeholderTextColor="#000"
        />
      </View>
      <View style={up ? styles.kfield1 : styles.field1}>
        <Text style={styles.fieldName}>Mobile Number</Text>
        <TextInput
          style={styles.fieldValue}
          value={phone}
          onChangeText={(text) => {
            route.params.onChangePhone(text);
            setPhone(text);
          }}
          placeholderTextColor="#000"
        />
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
  edit: {
    height: deviceHeight * 0.05,
    width: deviceHeight * 0.05,
    borderRadius: deviceHeight * 0.025,
    right: 5,
    position: "absolute",
    zIndex: 1,

    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  kfield: {
    width: "90%",
    backgroundColor: "#fff",
    alignSelf: "center",
    marginTop: "12%",
  },
  field: {
    width: "90%",
    backgroundColor: "#fff",
    alignSelf: "center",
    marginTop: "15%",
  },
  kfield1: {
    width: "90%",
    backgroundColor: "#fff",
    alignSelf: "center",
    marginTop: "3%",
  },
  field1: {
    width: "90%",
    backgroundColor: "#fff",
    alignSelf: "center",
    marginTop: "5%",
  },
  fieldName: {
    fontSize: 22,
    color: "#000",
    fontWeight: "bold",
  },
  fieldValue: {
    borderBottomWidth: 1,
    borderColor: "#e0e0e0",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "3%",
  },

  profilePik: {
    height: deviceHeight * 0.2,
    width: deviceHeight * 0.2,
    position: "absolute",
    zIndex: 1,
    borderRadius: deviceHeight * 0.2,
    backgroundColor: "#e0e0e0",
    alignSelf: "center",
    top: deviceHeight * 0.1,
  },
  profileImage: {
    height: deviceHeight * 0.2,
    width: deviceHeight * 0.2,
    borderRadius: deviceHeight * 0.2,
    borderColor: "#4B413A",

    borderWidth: 3,
    alignSelf: "center",
  },
  upper: {
    height: deviceHeight * 0.25,
    width: "100%",
    backgroundColor: "#5db075",
  },
});

export default EditProfile;
