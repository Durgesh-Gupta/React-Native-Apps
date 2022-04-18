import React from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from "react-native";
import Input from "./input";

const Card = (props) => {
  const [enteredvalue, setenteredvalue] = useState("");
  const numberInputHandler = (inputText) => {
    setenteredvalue(inputText.replace(/^[0-9]/g, ""));
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={{ ...style.card, ...props.style }}>
        <Text>Select a Number</Text>
        <Input
          style={style.input}
          blurOnSubmit
          autoCapitalize
          keyboardType="number-pad"
          maxLength={2}
          onCHangeText={numberInputHandler}
          value={enteredvalue}
        />
        <View style={style.buttonContainer}>
          <View style={style.button}>
            <Button title="Reset" />
          </View>
          <View style={style.button}>
            <Button title="Confirm" />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const style = StyleSheet.create({
  card: {
    shadowColor: "Black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 0.26,
    shadowOpacity: "white",
    elevation: 6,
    padding: 20,
    borderRadius: 10,
  },
  button: {},
  input: {
    width: 50,
    textAlign: "center",
  },
});

export default Card;
