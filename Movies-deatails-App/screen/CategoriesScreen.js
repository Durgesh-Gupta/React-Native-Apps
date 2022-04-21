import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const CategoriesScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Category Screen</Text>
      <Button title="Go To next" onPress={()=>{props.navigation.navigate('MovieCategory')}} />
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
export default CategoriesScreen;
