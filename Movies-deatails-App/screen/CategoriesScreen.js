import React from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CategoryGridTile from "../Component/CategoryGridTile";
import { CATEGORIES } from "../Data/dummy-data";

const CategoriesScreen = (props) => {
  const renderFGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate("MovieCategory", {
            MoviesId: itemData.item.id,
          });
        }}
        color={itemData.item.color}
      />
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
