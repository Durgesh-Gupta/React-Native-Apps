import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const CategoryMoviesScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Movies Category Screen</Text>
      <Button title="Go To next" onPress={()=>{props.navigation.navigate('MovieDetails')}} />

    </View>
  );
};
const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
export default CategoryMoviesScreen;
