import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./components/StartGameScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
