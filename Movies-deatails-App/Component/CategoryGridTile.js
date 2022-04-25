import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../Constants/Colors";

const CategoryGridTile = (props) => {
  return (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => {
        props.navigation.navigate("MovieCategory", {
          MoviesId: itemData.item.id,
        });
      }}
    >
      <View
        style={{ ...styles.Container, backgroundColor: props.color  }}
      >
        <Text style={styles.title} numberOfLines={2}
        >
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    borderRadius: 10,
    shadowColor:'black',
    shadowOpacity:0.26,
    elevation:3,
    padding:15,
    justifyContent:'flex-end',alignItems:"flex-end",shadowRadius:10,

  },
  title:{fontFamily:'open-sans-bold',fontSize:16,textAlign:'right'},
  gridItem: { margin: 15, flex: 1, height: 150 },
});
export default CategoryGridTile;
