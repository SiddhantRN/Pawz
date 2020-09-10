import React from "react";
import Constants from "expo-constants";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import Seperator from "../Components/Seperator";
import DogList from "../Components/DogList";

const screenHeight = Dimensions.get("window").height;

const Dogs = [
  {
    id: 1,
    images: [
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598019355/Doggo%20App/dogs/sally_y4bxzj.jpg",

      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598106399/Doggo%20App/dogs/sally2_npbo6z.png",

      "https://res.cloudinary.com/dy71m2dro/image/upload/v1598106387/Doggo%20App/dogs/sally3_ens27j.png",
    ],
    thumnail:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1599081537/Doggo%20App/Thumnails/sally_y4bxzj_tn_bklnuf.jpg",
    name: "Sally",
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
    thumnail:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1599081008/Doggo%20App/Thumnails/doggie1_tn_ixoif1.jpg",
    name: "Pupper",
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
    thumnail:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1599081536/Doggo%20App/Thumnails/hank1_geajo5_tn_gcy9x4.jpg",
    name: "Hank",
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
    thumnail:
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1599081537/Doggo%20App/Thumnails/Stan_sm3yfo_tn_yvwgml.jpg",
    name: "Stan",
    centerName: "Charlie’s rescue center",
    age: "2",
    distance: "17",
    breed: "Stray",
    story:
      "was found abandoned by three teenagers chained to the outside of her house which her previous owner left without taking her with them.Thanks to those boys we got to know about her and were able to go and rescue her. She was very scared at the beginning,and was refusing for anyone to come near her,but gradually after calming her down and feeding her she developed trust in us.She was very thin and weak when we brought her to our rescue center,but she regained her health very quickly again. Sally is a really playful,loving and jolly dog,she loves everyone very dearly and is really really great-full to everyone for rescuing her.She loves bananas , going out on walks and playing with ball.Anyone will be really lucky to have Sally as their family member.",
  },
];

function AdoptListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          marginTop: "1%",
        }}
      >
        <Ionicons name="md-information-circle" size={28} color="#5db075" />
        <TouchableOpacity onPress={() => navigation.navigate("DogCardScreen")}>
          <MaterialCommunityIcons name="cards" size={28} color="#5db075" />
        </TouchableOpacity>
      </View>
      <Seperator width={"95%"} />
      <FlatList
        data={Dogs}
        keyExtractor={(dog) => dog.id.toString()}
        renderItem={({ item }) => {
          return <DogList dog={item} buttonName={"Know More"} />;
        }}
        ItemSeparatorComponent={Seperator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    top: Constants.statusBarHeight,
    paddingBottom: screenHeight * 0.03,
  },
});

export default AdoptListScreen;
