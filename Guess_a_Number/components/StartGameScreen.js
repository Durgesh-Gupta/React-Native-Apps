import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Card from "./Card";
import Input from "./Input";
import Colors from "../constants/colors";

const StartGameScreen = () => {
  const [enteredvalue, setenteredvalue] = useState("");
  const numberInputHandler = (inputText) => {
    setenteredvalue(inputText.replace(/^[0-9]/g, ""));
  };
  return (
    <View style={style.screen}>
      <Text style={style.title}>Start a New Game!</Text>

      <Card style={style.InputContainer}>
        <Text>Select a Number</Text>
        <Input
          style={style.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          onCHangeText={numberInputHandler}
          value={enteredvalue}
        />
        <View style={style.buttonContainer}>
          <View style={style.button}>
            <Button title="Reset" onPress={() => {}} color={Colors.accent} />
          </View>
          <View style={style.button}>
            <Button title="Confirm" onPress={() => {}} color={Colors.primary} />
          </View>
        </View>
      </Card>
    </View>
  );
};
const style = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
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
  button: { width: 80 },
  input: {
    width: 50,
    textAlign: "center",
  },
});

export default StartGameScreen;
