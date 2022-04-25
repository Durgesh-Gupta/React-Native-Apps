import React from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CATEGORIES } from "../Data/dummy-data";

const CategoriesScreen = (props) => {
  const renderFGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate("MovieCategory", {
            MoviesId: itemData.item.id,
          });
        }}
      >
        <View>
          <Text>{itemData.item.title}1</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList numColumns={2} renderItem={renderFGridItem} data={CATEGORIES} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  gridItem: { margin: 15, flex: 1, height: 150 },
});
export default CategoriesScreen;
