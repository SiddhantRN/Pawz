import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Screen_height = Dimensions.get("window").height;
const Screen_width = Dimensions.get("window").width;

function IconContainer({ icon, text, Screen, onPress }) {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      style={{
        height: "70%",
        width: "30%",
        borderRadius: 8,

        elevation: 3,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
      }}
      activeOpacity={0.7}
      underlayColor="#9e9e9e"
      onPress={Screen ? () => navigation.navigate(Screen) : onPress}
    >
      <View style={styles.iconBox}>
        <Image source={icon} resizeMode={"contain"} style={styles.iconImage} />
        <Text style={{ fontWeight: "bold", fontSize: Screen_height * 0.018 }}>
          {text}
        </Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  iconBox: {
    height: "100%",
    width: "100%",
    borderRadius: 8,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  iconImage: {
    height: "50%",
    width: "50%",
  },
});

export default IconContainer;
