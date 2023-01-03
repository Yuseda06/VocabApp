import { View, Text, SafeAreaView, Button, FlatList } from "react-native";
import React from "react";
import * as Speech from "expo-speech";

const vocab = [
  {
    word: "Adult",
    translation: "Orang dewasa",
  },
  {
    word: "Advice",
    translation: "Nasihat",
  },
  {
    word: "Age",
    translation: "Umur",
  },
  {
    word: "Air",
    translation: "Udara",
  },
];

export default function Dashboard() {
  const speak = async () => {
    const thingToSay =
      "Muslims believe that the Quran was orally revealed by God to the final prophet, Muhammad, through the archangel Gabriel";
    const availableVoices = await Speech.getAvailableVoicesAsync();

    Speech.speak(thingToSay, {
      //   language: "American",
      voiceList: availableVoices,
      voice: availableVoices[15].identifier,
    });
  };

  const trying = () => {
    console.log("first");
  };

  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <Button title="Press to hear some words" onPress={speak} />
        <Text>Dashboard</Text>
        <FlatList></FlatList>
      </View>
    </SafeAreaView>
  );
}
