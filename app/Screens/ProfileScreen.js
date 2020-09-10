import React, { useState } from "react";
import Constants from "expo-constants";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import SectionContainer from "../Components/SectionContainer";

deviceHeight = Dimensions.get("window").height;
deviceWidth = Dimensions.get("window").width;

function ProfileScreen({ navigation }) {
  const [userName, setUserName] = useState("Hooman");
  const [email, setEmail] = useState("Hooman@woof.com");
  const [phone, setPhone] = useState("9234598907");
  const [pik, setPik] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <Text
          style={{
            color: "#fff",
            position: "absolute",
            alignSelf: "center",
            fontSize: deviceHeight * 0.04,
            fontWeight: "bold",
            marginTop: "1%",
          }}
        >
          Profile
        </Text>
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={{ color: "#fff", left: 5, fontSize: 18 }}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Edit", {
                name: userName,
                mail: email,
                number: phone,
                image: pik,
                onChangeName: setUserName,
                onChangeEmail: setEmail,
                onChangePhone: setPhone,
                onChangeImage: setPik,
              })
            }
          >
            <Text
              style={{
                color: "#fff",
                right: 5,

                fontSize: 18,
              }}
            >
              Edit
            </Text>
          </TouchableOpacity>
        </View>

        <Image
          source={
            pik
              ? { uri: pik }
              : {
                  uri:
                    "https://res.cloudinary.com/dy71m2dro/image/upload/v1599067286/Doggo%20App/Others/owner_gm6bkw.png",
                }
          }
          style={styles.profilePik}
          resizeMode={"cover"}
        />
      </View>

      <Text style={styles.name}>{userName}</Text>
      <Text style={styles.eMail}>{email}</Text>
      <View style={styles.box2}>
        <Text style={styles.phoneNumber}>Phone Number</Text>
        <Text style={styles.number}>{phone}</Text>
        <SectionContainer
          color={"#fff"}
          txtColor={"#000"}
          name={"My Donations"}
          iconName={"keyboard-arrow-right"}
          paddingV={10}
          fontSize={20}
        />
        <SectionContainer
          color={"#fff"}
          txtColor={"#000"}
          name={"Rate Us"}
          iconName={"keyboard-arrow-right"}
          paddingV={10}
          fontSize={20}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box2: {
    width: "90%",
    marginTop: deviceHeight * 0.04,
    alignSelf: "center",
  },
  container: {
    flex: 1,
    top: Constants.statusBarHeight,
    backgroundColor: "#fff",
  },
  eMail: {
    fontSize: deviceHeight * 0.025,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#7A8A94",
  },
  header: {
    flexDirection: "row",
    width: "100%",

    alignItems: "center",
    justifyContent: "space-between",

    marginTop: "3%",
  },
  name: {
    marginTop: "15%",
    fontSize: deviceHeight * 0.038,
    fontWeight: "bold",
    alignSelf: "center",
  },
  number: {
    color: "#7A8A94",
    fontSize: 18,
  },
  phoneNumber: {
    fontWeight: "bold",
    fontSize: 20,
  },
  profilePik: {
    height: deviceHeight * 0.2,
    width: deviceHeight * 0.2,
    borderRadius: deviceHeight * 0.2,
    backgroundColor: "#e0e0e0",
    alignSelf: "center",
    top: deviceHeight * 0.04,
    borderColor: "#4B413A",
    borderWidth: 3,
  },
  upper: {
    height: deviceHeight * 0.25,
    width: "100%",
    backgroundColor: "#5db075",
  },
});

export default ProfileScreen;
