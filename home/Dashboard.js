import {
  View,
  Text,
  SafeAreaView,
  Button,
  FlatList,
  TouchableHighlight,
  StyleSheet,
  Image,
  TextInput,
  Alert,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import * as Speech from "expo-speech";

const vocab = [
  {
    word: "Adult",
    translation: "Orang dewasa",
    image: require("../assets/images/adult.png"),
  },
  {
    word: "Advice",
    translation: "Nasihat",
    image: require("../assets/images/advice.png"),
  },
  {
    word: "Age",
    translation: "Umur",
    image: require("../assets/images/age.png"),
  },
  {
    word: "Air",
    translation: "Udara",
    image: require("../assets/images/air.png"),
  },
  {
    word: "Animal",
    translation: "Binatang",
    image: require("../assets/images/animal.png"),
  },
  {
    word: "Answer",
    translation: "Jawapan",
    image: require("../assets/images/answer.png"),
  },
  {
    word: "Audience",
    translation: "Penonton",
    image: require("../assets/images/audience.png"),
  },
  {
    word: "Beach",
    translation: "Pantai",
    image: require("../assets/images/beach.png"),
  },
  {
    word: "Beauty",
    translation: "Kecantikan",
    image: require("../assets/images/beauty.png"),
  },
  {
    word: "Bed",
    translation: "Katil",
    image: require("../assets/images/bed.png"),
  },
  {
    word: "Behaviour",
    translation: "Kelakuan",
    image: require("../assets/images/behaviour.png"),
  },
  {
    word: "Blood",
    translation: "Darah",
    image: require("../assets/images/blood.png"),
  },
];

export default function Dashboard() {
  const [text, setText] = useState("");
  const [textValue, setTextValue] = useState("Testing");

  const handleVoice = async (word) => {
    const thingToSay = word;
    const availableVoices = await Speech.getAvailableVoicesAsync();
    console.log(availableVoices);

    Speech.speak(thingToSay, {
      // voiceList: availableVoices,
      // voice: availableVoices[15].identifier,
    });
  };

  const Item = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        backgroundColor: "#fff",
        borderRadius: 15,
      }}
    >
      <View>
        <View>
          <TouchableHighlight onPress={() => handleVoice(item.word)}>
            <Text style={{ fontSize: 30, marginLeft: 10, fontStyle: "bold" }}>
              {item.word}
            </Text>
          </TouchableHighlight>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 10,
              marginTop: 20,
              fontStyle: "italic",
              color: "gray",
            }}
          >
            {item.translation}
          </Text>
        </View>
      </View>
      <View>
        <Image style={[styles.stretch, { margin: 30 }]} source={item.image} />
      </View>
    </View>
  );

  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <SafeAreaView style={{ backgroundColor: "#ADD8E6", flex: 1 }}>
      <View style={{ margin: 20 }}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter Word"
            onChangeText={(text) => setText(text)}
            value={text}
          />
          <Button title="Pronounce" onPress={() => handleVoice(text)} />
        </View>
      </View>

      <FlatList
        data={vocab}
        renderItem={renderItem}
        keyExtractor={(item) => item.word}
        style={{
          marginTop: 30,
          paddingHorizontal: 20,
          backgroundColor: "#ADD8E6",
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 48,
  },
  item: {
    backgroundColor: "#eee",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
  },
  stretch: {
    width: 100,
    height: 100,
    resizeMode: "stretch",
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: "100%",
    borderRadius: 10,
    fontSize: 30,
  },
  title: {
    backgroundColor: "red",
    textAlign: "center",
    padding: 10,
    fontSize: 20,
    color: "#FFFF",
    fontWeight: "bold",
  },
  container: {
    marginTop: 40,
    alignItems: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 13,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: "100%",
    marginVertical: 10,
  },
});
