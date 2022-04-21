import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Fonts from "expo-font";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from "./screen/CategoriesScreen";
import CategoryMoviesScreen from "./screen/CategoryMoviesScreen";
import MoviesDetailScreen from "./screen/MoviesDetailScreen";

const fetchFont = () => {
  return Fonts.loadAsync({
    "open-sans": require("./assets/fonts/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/fonts/OpenSans-Bold.ttf"),
  });
};
const Stack = createNativeStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={CategoriesScreen} />
        <Stack.Screen name="MovieCategory" component={CategoryMoviesScreen} />
        <Stack.Screen name="MovieDetails" component={MoviesDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>

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
