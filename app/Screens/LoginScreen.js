import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppTextInput from "../Components/AppTextInput";
import AppButton from "../Components/AppButton";
import OrSeperator from "../Components/orSeperator";

function LoginScreen() {
  const navigation = useNavigation();
  const handleLogin = () => {
    alert("this is login :)");
  };
  return (
    <View style={styles.box}>
      <AppTextInput text={"Email"} top={"10%"} />
      <AppTextInput text={"Password"} top={"5%"} />
      <OrSeperator top={"13.5%"} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#616161", fontSize: 16 }}>Log in with :</Text>
        <Image
          source={require("../assets/icons/google.png")}
          style={styles.icon}
          resizeMode={"contain"}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("App")}>
        <Text style={{ color: "#616161", fontSize: 16, marginTop: "5%" }}>
          Skip and proceed to App
        </Text>
      </TouchableOpacity>
      <AppButton text={"Log In"} top={"5%"} onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: "90%",
    top: Dimensions.get("window").height * 0.025,
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: 10,
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: 8,
  },

  icon: {
    height: 45,
    width: 45,
    marginLeft: "3%",
  },
  seperator: {
    marginTop: "5%",
    width: "90%",
    height: 1.5,
    backgroundColor: "#9e9e9e",
  },
});

export default LoginScreen;
