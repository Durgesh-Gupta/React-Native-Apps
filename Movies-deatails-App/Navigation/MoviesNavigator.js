import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesScreen from "../screen/CategoriesScreen";
import CategoryMoviesScreen from "../screen/CategoryMoviesScreen";
import MoviesDetailScreen from "../screen/MoviesDetailScreen";
import Colors from "../Constants/Colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const MoviesNavigator = (props) => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.textheader,
          }}
        >
          <Stack.Screen name="Home" component={CategoriesScreen} />
          <Stack.Screen
            name="MovieCategory"
            component={CategoryMoviesScreen}
            options={{
              headerStyle: {
                backgroundColor: Colors.primary,
              },
              headerTintColor: Colors.textheader,
            }}
          />
          <Stack.Screen name="MovieDetails" component={MoviesDetailScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MoviesNavigator;
