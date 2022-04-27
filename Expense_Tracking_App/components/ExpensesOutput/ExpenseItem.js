import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

const ExpenseItem = ({ description, amount, date }) => {
  const navigation = useNavigation();
  function expensePressHandler() {
    navigation.navigate("ManageExpense");
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text>{description}</Text>
          {/* <Text>{date.toString()}</Text> */}
        </View>
        <View>
          <Text>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.PrimaryText,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 3,
    borderRadius: 6,
    shadowColor: Colors.Third,
    shadowOffset: { width: 1, height: 1 },
  },
  pressed: {
    opacity: 0.6,
  },
});
export default ExpenseItem;
