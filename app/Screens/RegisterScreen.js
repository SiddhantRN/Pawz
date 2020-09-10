import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  Keyboard,
} from "react-native";
import Constants from "expo-constants";

import ButtonSlider from "../Components/ButtonSlider";

import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";

function RegisterScreen({ navigation }) {
  const [up, setUp] = useState(false);
  const [login, setLogin] = useState(true);

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

  const handleSlide = (value) => {
    setLogin(value);
  };
  return (
    <ImageBackground
      source={{
        uri:
          "https://res.cloudinary.com/dy71m2dro/image/upload/v1599067306/Doggo%20App/Others/Login_tl9eiv.png",
      }}
      style={styles.image}
    >
      {!up && (
        <ButtonSlider
          onSlide={handleSlide}
          buttonName1={"Login"}
          buttonName2={"SignUp"}
          top={"10%"}
        />
      )}
      {login ? <LoginScreen /> : <SignupScreen />}
    </ImageBackground>
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
  image: {
    position: "absolute",
    alignItems: "center",
    top: Constants.statusBarHeight,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  icon: {
    height: 45,
    width: 45,
  },
  seperator: {
    marginTop: "5%",
    width: "90%",
    height: 1.5,
    backgroundColor: "#9e9e9e",
  },
});

export default RegisterScreen;
