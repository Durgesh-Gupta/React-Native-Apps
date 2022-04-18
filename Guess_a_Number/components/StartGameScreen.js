import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Card from "./Card";

const StartGameScreen = () => {
  return (
    <View style={style.screen}>
      <Text style={style.title}>Start a New Game!</Text>
     
      <Card style={style.InputContainer}></Card>
     
    </View>
  );
};
const style = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  InputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
});

export default StartGameScreen;
