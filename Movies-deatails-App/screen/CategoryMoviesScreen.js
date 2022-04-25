import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../Data/dummy-data";

const CategoryMoviesScreen = (props) => {
  let { MoviesId } = props.route.params;
  const {navigation}=props
 console.log("Navigation",navigation)
  let Newcategory=CATEGORIES.filter((item)=> item.id==MoviesId)
  return (
    <View style={styles.container}>
      <Text>Movies Category Screen{MoviesId}</Text>
      <Text>{Newcategory[0].title}</Text>
      <Button
        title="Go To next"
        onPress={() => {
          props.navigation.navigate("MovieDetails");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default CategoryMoviesScreen;
