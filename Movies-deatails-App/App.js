import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Fonts from "expo-font";
import AppLoading from "expo-app-loading";
import { useState } from "react";

const fetchFont = () => {
  return Fonts.loadAsync({
    "open-sans": require("./assets/fonts/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onError={console.warn}
        onFinish={() => setfontLoaded(true)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "open-sans-bold" }}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
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
