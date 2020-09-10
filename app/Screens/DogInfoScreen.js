import React, { useState } from "react";
import Constants from "expo-constants";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { SliderBox } from "react-native-image-slider-box";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import DogList from "../Components/DogList";
import Seperator from "../Components/Seperator";
import { useRoute } from "@react-navigation/native";

const deviceHeight = Dimensions.get("window").height;

function DogInfoScreen({ navigation }) {
  const route = useRoute();
  const modalizeRef = React.createRef();

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      <View
        style={{
          top: Constants.statusBarHeight,
        }}
      >
        <TouchableOpacity
          style={{ position: "absolute", top: 10, left: 5, zIndex: 1 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="md-arrow-round-back" size={30} color="black" />
        </TouchableOpacity>
        <SliderBox
          images={route.params.doggy.images}
          sliderBoxHeight={deviceHeight * 0.6}
          dotColor="#5db075"
          inactiveDotColor="#90A4AE"
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            marginHorizontal: 3,

            padding: 0,
            margin: 0,
          }}
          paginationBoxStyle={{
            bottom: 10,
          }}
          resizeMode={"cover"}
        />
      </View>
      <Modalize
        onClose={() => modalizeRef.current?.scrollTo(0)}
        ref={modalizeRef}
        alwaysOpen={
          Platform.OS === "ios"
            ? deviceHeight * 0.4 - Constants.statusBarHeight
            : deviceHeight * 0.4
        }
        modalStyle={{}}
        modalHeight={deviceHeight * 0.7}
        disableScrollIfPossible
      >
        <DogList
          dog={route.params.doggy}
          image={false}
          buttonName={"Contact"}
        />
        <Seperator width={"95%"} />
        <View style={{ alignSelf: "center", width: "90%", marginTop: "2%" }}>
          <Text style={{ fontSize: 25 }}>
            {route.params.doggy.name}'s Story
          </Text>
          <Text style={{ fontSize: deviceHeight * 0.022 }} numberOfLines={18}>
            {route.params.doggy.name} {route.params.doggy.story}
          </Text>
        </View>
      </Modalize>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, top: Constants.statusBarHeight },
  try: {
    height: Dimensions.get("window").height * 0.25,
    backgroundColor: "#5db075",
    borderBottomRightRadius: Dimensions.get("window").width * 0.15,
    borderBottomLeftRadius: Dimensions.get("window").width * 0.15,
  },
  button: {
    backgroundColor: "#5db075",
    height: Dimensions.get("window").height * 0.06,
    width: Dimensions.get("window").height * 0.15,
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",
  },
  dogDp: {
    height: Dimensions.get("window").height * 0.15,
    width: Dimensions.get("window").width * 0.3,
    borderRadius: 10,
    overflow: "hidden",
  },
  dogListing: {
    flexDirection: "row",
    padding: 10,
  },
  dogInfo: {
    top: -5,
    marginLeft: "3%",
  },
});

export default DogInfoScreen;
