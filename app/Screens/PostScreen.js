import React from "react";
import Constants from "expo-constants";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Dimensions,
  Share,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native-expo-image-cache";

const DATA = [
  {
    url:
      "https://www.strawindia.org/blogs/6/adopt-dont-shop-because-it-worth-thousands-of-lives.aspx",
  },
];

function PostScreen({ navigation }) {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Adopt Don't Shop ${DATA[0].url}`,
      });

      if (result.action === Share.sharedAction) {
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonBox}>
        <Ionicons
          name="md-arrow-round-back"
          size={30}
          color="#5DB075"
          onPress={() => navigation.goBack()}
        />
        <Ionicons name="md-share" size={30} color="#5DB075" onPress={onShare} />
      </View>
      <ScrollView>
        <Text style={styles.header}>Adopt don't shop</Text>
        <Text style={styles.date}>by Surbhi Mantri</Text>

        <Image
          preview={{
            uri:
              "https://res.cloudinary.com/dy71m2dro/image/upload/v1599081008/Doggo%20App/Thumnails/doggie1_tn_ixoif1.jpg",
          }}
          uri={
            "https://res.cloudinary.com/dy71m2dro/image/upload/v1598019368/Doggo%20App/dogs/pupper_yrfhqe.png"
          }
          resizeMode={"cover"}
          style={styles.image}
        />

        <Text style={styles.body}>
          “Adopt, don’t shop” is a campaign slogan encouraging people to adopt
          dogs from shelters or rescues rather than purchasing a dog from a
          breeder or puppy mill. Over the past few months, I’ve repeatedly been
          asked by friends and colleagues as to where they could buy a dog from.
          My first question to them is, “Why do you want to buy one? Why can’t
          you just adopt a stray or a rescued animal, instead?” And more often
          than not, their instant reactions are those of – “But dogs up for
          adoption are usually unhealthy and sick”, or “I don’t want to buy a
          mix breed or street dog.” or to the extent of saying that they’re not
          pretty and appealing enough to outright rejecting the idea. And to my
          dismay, they do end up buying one from a breeder. But in the attempt
          of buying a pretty, healthy and purely bred dog, aren’t we forgetting
          the real reason for which we wanted a companion in the first place?
          Let’s think about it! What we really need is love, companionship, and
          happiness in our lives and it is for this reason that we take the
          decision to get home our furry friends, right? And for those of you
          who claim to love animals and dogs in particular, don’t you think
          that by buying dogs you are promoting commercial dog breeding? So why
          is it that we are not in favor of commercial dog breeding? Let me
          explain: {"\n"} - Practices and conditions in most breeding centers
          are unethical and downright abhorrent in many cases. Dogs live in
          squalid conditions, often without proper veterinary care and basic
          amenities.{"\n"} - The mercenary breeders breed female dogs at every
          opportunity they get, giving them very little time for recovery, the
          result of which is that many puppies are born with serious health
          problems and often die premature deaths. {"\n"}- Buying a pet involves
          a huge amount of money. Health problems mentioned above, leads to a
          number of visits to the veterinarian, thereby increasing the costs
          further.{"\n"} - Many local shelters only have a certain limit up to
          which they can foster dogs. Till the time they are not adopted, other
          dogs can’t be brought in. {"\n"}Advantages of Adopting a Dog Now,
          {"\n"}
          let’s take a moment and look at the many advantages of adopting a dog:
          - The amount of self-satisfaction that you will get by adopting a dog
          would far surpass that when you purchase one because the amount of
          unconditional love you will receive from a homeless or rescued dog
          will be the same as that you would receive from a dog that you
          purchase.{"\n"} - Our very own Indian strays, apart from being
          absolute beauties, the rough life on streets has made them immune and
          healthy in numerous ways. They are naturally much more strong and
          tolerant to adverse conditions.{"\n"} - Adoption is free of cost!
          Hence, you save the costs of purchasing a dog.{"\n"} - For those who
          want an excellent variety of dogs to choose from, there is nothing
          better than a shelter or a rescue center.{"\n"} - For those who are a
          little older and want a slightly sober dog as a companion, a shelter
          or a rescue center may be a good choice as you can pick up a
          well-trained old dog too.{"\n"} - For every one dog that you adopt
          from a rescue center or shelter, one more dog is taken in its place.
          So in a way you actually save two lives!{"\n"} I found this article on
          the internet and found it to be very well put together explaining
          about the benefits and importance of adopting a dog(or any animal)
          rather than buying one.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: "3%",
    marginLeft: "3%",
    width: "95%",
    fontSize: 22,
    marginBottom: Constants.statusBarHeight,
  },
  buttonBox: {
    flexDirection: "row",

    marginTop: 10,
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },

  container: {
    flex: 1,
    top: Constants.statusBarHeight,
  },
  date: {
    fontSize: 15,
    marginLeft: "3%",
    color: "#616161",
  },
  header: {
    marginLeft: "2%",
    marginTop: "2%",
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
  },
  image: {
    marginTop: "5%",
    height: Dimensions.get("window").height * 0.35,
    width: "100%",
    alignSelf: "center",
  },
});

export default PostScreen;
