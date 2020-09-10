import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Text,
  PanResponder,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import DogCard from "../Components/DogCard";
import { FontAwesome } from "@expo/vector-icons";
import DogCardButton from "../Components/DogCardButton";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import Seperator from "../Components/Seperator";

const Screen_height = Dimensions.get("window").height;
const Screen_width = Dimensions.get("window").width;

const Users = [
  {
    id: 1,
    images: [
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598019355/Doggo%20App/dogs/sally_y4bxzj.jpg",

      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598106399/Doggo%20App/dogs/sally2_npbo6z.png",

      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598106387/Doggo%20App/dogs/sally3_ens27j.png",
    ],
    name: "Sally",
    thumnail:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1599081537/Doggo%20App/Thumnails/sally_y4bxzj_tn_bklnuf.jpg",
    centerName: "Charlie’s rescue center",
    age: "3",
    distance: "27",
    breed: "Labrador",
    story:
      "was found abandoned by three teenagers chained to the outside of her house which her previous owner left without taking her with them.Thanks to those boys we got to know about her and were able to go and rescue her. She was very scared at the beginning,and was refusing for anyone to come near her,but gradually after calming her down and feeding her she developed trust in us.She was very thin and weak when we brought her to our rescue center,but she regained her health very quickly again. Sally is a really playful,loving and jolly dog,she loves everyone very dearly and is really really great-full to everyone for rescuing her.She loves bananas , going out on walks and playing with ball.Anyone will be really lucky to have Sally as their family member.",
  },
  {
    id: 2,
    images: [
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598019368/Doggo%20App/dogs/pupper_yrfhqe.png",

      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598106334/Doggo%20App/dogs/pupper1_ic5itq.png",
    ],
    name: "Pupper",
    thumnail:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1599081008/Doggo%20App/Thumnails/doggie1_tn_ixoif1.jpg",
    centerName: "Charlie’s rescue center",
    age: "1",
    distance: "7",
    breed: "Stray",
    story:
      "was found abandoned by three teenagers chained to the outside of her house which her previous owner left without taking her with them.Thanks to those boys we got to know about her and were able to go and rescue her. She was very scared at the beginning,and was refusing for anyone to come near her,but gradually after calming her down and feeding her she developed trust in us.She was very thin and weak when we brought her to our rescue center,but she regained her health very quickly again. Sally is a really playful,loving and jolly dog,she loves everyone very dearly and is really really great-full to everyone for rescuing her.She loves bananas , going out on walks and playing with ball.Anyone will be really lucky to have Sally as their family member.",
  },
  {
    id: 3,
    images: [
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598019173/Doggo%20App/dogs/spot_tcjxqe.png",

      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598105390/Doggo%20App/dogs/spot2_dz7o5b.png",

      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598106247/Doggo%20App/dogs/spot3_akx9z5.png",
    ],
    thumnail:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1599081535/Doggo%20App/Thumnails/spot_tcjxqe_tn_krft8o.jpg",
    name: "Spot",
    centerName: "Charlie’s rescue center",
    age: "2",
    distance: "17",
    breed: "Stray",
    story:
      "was found abandoned by three teenagers chained to the outside of her house which her previous owner left without taking her with them.Thanks to those boys we got to know about her and were able to go and rescue her. She was very scared at the beginning,and was refusing for anyone to come near her,but gradually after calming her down and feeding her she developed trust in us.She was very thin and weak when we brought her to our rescue center,but she regained her health very quickly again. Sally is a really playful,loving and jolly dog,she loves everyone very dearly and is really really great-full to everyone for rescuing her.She loves bananas , going out on walks and playing with ball.Anyone will be really lucky to have Sally as their family member.",
  },
  {
    id: 4,
    images: [
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598106363/Doggo%20App/dogs/hank1_geajo5.png",

      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598106353/Doggo%20App/dogs/hank2_r6e1dw.png",

      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598106366/Doggo%20App/dogs/hank3_ogomr3.png",
    ],
    name: "Hank",
    thumnail:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1599081536/Doggo%20App/Thumnails/hank1_geajo5_tn_gcy9x4.jpg",
    centerName: "Charlie’s rescue center",
    age: "2",
    distance: "17",
    breed: "Stray",
    story:
      "was found abandoned by three teenagers chained to the outside of her house which her previous owner left without taking her with them.Thanks to those boys we got to know about her and were able to go and rescue her. She was very scared at the beginning,and was refusing for anyone to come near her,but gradually after calming her down and feeding her she developed trust in us.She was very thin and weak when we brought her to our rescue center,but she regained her health very quickly again. Sally is a really playful,loving and jolly dog,she loves everyone very dearly and is really really great-full to everyone for rescuing her.She loves bananas , going out on walks and playing with ball.Anyone will be really lucky to have Sally as their family member.",
  },
  {
    id: 5,
    images: [
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598106203/Doggo%20App/dogs/Stan_sm3yfo.png",

      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598106209/Doggo%20App/dogs/stan2_qevb9u.png",

      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598106193/Doggo%20App/dogs/stan3_ncnano.png",
    ],
    name: "Stan",
    thumnail:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1599081537/Doggo%20App/Thumnails/Stan_sm3yfo_tn_yvwgml.jpg",
    centerName: "Charlie’s rescue center",
    age: "2",
    distance: "17",
    breed: "Stray",
    story:
      "was found abandoned by three teenagers chained to the outside of her house which her previous owner left without taking her with them.Thanks to those boys we got to know about her and were able to go and rescue her. She was very scared at the beginning,and was refusing for anyone to come near her,but gradually after calming her down and feeding her she developed trust in us.She was very thin and weak when we brought her to our rescue center,but she regained her health very quickly again. Sally is a really playful,loving and jolly dog,she loves everyone very dearly and is really really great-full to everyone for rescuing her.She loves bananas , going out on walks and playing with ball.Anyone will be really lucky to have Sally as their family member.",
  },
];

function DogCardScreen({ navigation }) {
  let [currentIndex, setCurrentIndex] = useState(0);
  let position = new Animated.ValueXY();
  let rotate = position.x.interpolate({
    inputRange: [-Screen_width / 2, 0, Screen_width / 2],
    outputRange: ["-10deg", "0deg", "10deg"],
    extrapolate: "clamp",
  });
  const rotateAndTranslate = {
    transform: [
      {
        rotate: rotate,
      },
      ...position.getTranslateTransform(),
    ],
  };
  const handleRight = () => {
    Animated.spring(position, {
      toValue: {
        x: Screen_width + 100,
        y: Screen_height - (Screen_height - 200),
      },
      restSpeedThreshold: 100,
      restDisplacementThreshold: 40,
      useNativeDriver: true,
    }).start(
      () => {
        setCurrentIndex(currentIndex + 1);
      },
      () => {
        position.setValue({ x: 0, y: 0 });
      }
    );
  };
  const handleLeft = () => {
    Animated.spring(position, {
      toValue: {
        x: -Screen_width - 100,
        y: Screen_height - (Screen_height - 200),
      },
      restSpeedThreshold: 100,
      restDisplacementThreshold: 40,
      useNativeDriver: true,
    }).start(
      () => {
        setCurrentIndex(currentIndex + 1);
      },
      () => {
        position.setValue({ x: 0, y: 0 });
      }
    );
  };
  let pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      position.setValue({ x: gestureState.dx, y: gestureState.dy });
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx > 120) {
        Animated.spring(position, {
          toValue: { x: Screen_width + 100, y: gestureState.dy },
          restSpeedThreshold: 100,
          restDisplacementThreshold: 40,
          useNativeDriver: true,
        }).start(
          () => {
            setCurrentIndex(currentIndex + 1);
          },
          () => {
            position.setValue({ x: 0, y: 0 });
          }
        );
      } else if (gestureState.dx < -120) {
        Animated.spring(position, {
          toValue: { x: -Screen_width - 100, y: gestureState.dy },
          restSpeedThreshold: 100,
          restDisplacementThreshold: 40,
          useNativeDriver: true,
        }).start(
          () => {
            setCurrentIndex(currentIndex + 1);
          },
          () => {
            position.setValue({ x: 0, y: 0 });
          }
        );
      } else {
        Animated.spring(position, {
          toValue: { x: 0, y: 0 },
          friction: 4,
          useNativeDriver: true,
        }).start();
      }
    },
  });

  const renderUsers = () => {
    return Users.map((item, i) => {
      if (i < currentIndex) {
        return null;
      } else if (i == currentIndex) {
        return (
          <Animated.View
            {...panResponder.panHandlers}
            key={item.id}
            style={[
              rotateAndTranslate,
              {
                height: Screen_height * 0.75,
                width: Screen_width,
                padding: 10,

                position: "absolute",
                overflow: "hidden",
              },
            ]}
          >
            <DogCard
              image={item.images[0]}
              name={item.name}
              age={item.age}
              breed={item.breed}
              thumnail={item.thumnail}
              distance={item.distance}
              story={item.story}
              rescueCenter={item.centerName}
            />
          </Animated.View>
        );
      } else {
        return (
          <Animated.View
            key={item.id}
            style={{
              height: Screen_height * 0.75,
              width: Screen_width,
              padding: 10,
              position: "absolute",
              overflow: "hidden",
            }}
          >
            <DogCard
              image={item.images[0]}
              name={item.name}
              age={item.age}
              breed={item.breed}
              thumnail={item.thumnail}
              distance={item.distance}
              story={item.story}
              rescueCenter={item.centerName}
            />
          </Animated.View>
        );
      }
    }).reverse();
  };

  return currentIndex < Users.length ? (
    <View style={{ flex: 1, top: Constants.statusBarHeight }}>
      <View
        style={{
          height: Screen_height * 0.1,
          justifyContent: "flex-start",
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <MaterialIcons name="info" size={28} color="#5db075" />
          <TouchableOpacity
            onPress={() => navigation.navigate("AdoptListScreen")}
          >
            <Octicons name="three-bars" size={28} color="#5db075" />
          </TouchableOpacity>
        </View>
        <Seperator marginTop={"5%"} />
      </View>
      <View style={{ width: Screen_width, height: Screen_height * 0.75 }}>
        {renderUsers()}
      </View>
      <View
        style={{
          height: Screen_height * 0.1,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={styles.buttons} onPress={() => handleLeft()}>
          <FontAwesome name="arrow-left" size={28} color="#5db075" />
        </TouchableOpacity>

        <DogCardButton
          dog={Users[currentIndex]}
          dogName={Users[currentIndex].name}
        />

        <TouchableOpacity style={styles.buttons} onPress={() => handleRight()}>
          <FontAwesome name="arrow-right" size={28} color="#5db075" />
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <Text
      style={{
        fontSize: Screen_height * 0.03,
        alignSelf: "center",
        top: Screen_height * 0.5,
        fontWeight: "bold",
      }}
    >
      Out of Doggos 🐶
    </Text>
  );
}

const styles = StyleSheet.create({
  buttons: {
    height: Screen_height * 0.08,
    width: Screen_height * 0.08,
    borderRadius: Screen_height * 0.04,
    backgroundColor: "#fff",
    elevation: 3,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    alignItems: "center",
  },

  container: {
    top: Constants.statusBarHeight,
  },
});

export default DogCardScreen;
