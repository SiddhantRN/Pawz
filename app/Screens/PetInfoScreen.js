import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions, FlatList } from "react-native";
import Constants from "expo-constants";
import SectionContainer from "../Components/SectionContainer";
import StoryContainer from "../Components/StoryContainer";

function PetInfoScreen(props) {
  const [sections, setSections] = useState([
    {
      name: "Diet/Nutrition",
      id: 1,
    },
    {
      name: "Training",
      id: 2,
    },
    {
      name: "Vaccinations",
      id: 3,
    },
  ]);
  const [stories, setStories] = useState([
    {
      title: "Understanding Dog Seizures - Causes & Treatment",
      id: 1,
      description:
        "A seizure is sometimes described as an electrical storm in the brain. Brain cells, called neurons, communicate using electrical and chemical signals. A seizure, also referred to as a convulsion or “fit,” occurs when there is a sudden surge of electri",
    },
    {
      title: "Is My Dog a Healthy Weight? Too Fat, Too Thin Or Just Right?",
      id: 2,
      description:
        "Is chocolate really harmfull for your puppy,be sure bla bla bla Is chocolate really harmfull for your puppy,be sure bla bla bla Is chocolate really harmfull for your puppy,be sure bla bla blaIs chocolate really harmfull for your puppy,be sure bla bla blaHere are 3 simple ways to tell if your dog's diet needs an adjustment.",
    },
    {
      title: "How Do I Know if My Cat or Dog Is Overweight?",
      id: 3,
      description:
        "It’s easy to determine if your dog is overweight or your cat is obese. Follow these three steps to do a body score check at home.",
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.heading}>INFORMATION SECTION</Text>
      </View>
      <View style={styles.sections}>
        <Text style={styles.heading2}>Sections</Text>
        <FlatList
          data={sections}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <SectionContainer
                color={"#5db075"}
                txtColor={"#fff"}
                iconColor={"#fff"}
                fontSize={16}
                paddingH={10}
                name={item.name}
                iconName={"keyboard-arrow-right"}
              />
            );
          }}
        />
      </View>
      <View style={styles.stories}>
        <Text style={styles.heading2}>Stories</Text>
        <FlatList
          horizontal
          data={stories}
          keyExtractor={(story) => story.id.toString()}
          renderItem={({ item }) => {
            return (
              <StoryContainer
                title={item.title}
                description={item.description}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: Constants.statusBarHeight,

    alignItems: "center",
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: "6%",
  },
  heading2: {
    fontSize: 25,
    fontWeight: "bold",
  },

  sections: {
    height: Dimensions.get("window").height * 0.35,
    width: "95%",
    alignSelf: "center",
    marginTop: "5%",
  },
  stories: {
    height: Dimensions.get("window").height * 0.3,
    width: "95%",

    alignSelf: "center",
  },

  top: {
    height: Dimensions.get("window").height * 0.25,
    backgroundColor: "#5db075",
    borderBottomRightRadius: Dimensions.get("window").width * 0.12,
    borderBottomLeftRadius: Dimensions.get("window").width * 0.12,
    width: "100%",
    overflow: "hidden",
    justifyContent: "flex-end",
  },
});

export default PetInfoScreen;
