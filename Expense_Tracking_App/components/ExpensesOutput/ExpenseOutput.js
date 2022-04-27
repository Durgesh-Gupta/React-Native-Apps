import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Shoes",
    amount: 5000,
    date: new Date("2022-09-01"),
  },
  {
    id: "e2",
    description: "Camera",
    amount: 45000,
    date: new Date("2022-09-02"),
  },
  {
    id: "e3",
    description: "Laptop",
    amount: 90000,
    date: new Date("2022-09-02"),
  },
  {
    id: "e4",
    description: "Watch",
    amount: 4000,
    date: new Date("2022-09-03"),
  },
  {
    id: "e5",
    description: "Mobile",
    amount: 75000,
    date: new Date("2022-09-03"),
  },
  {
    id: "e6",
    description: "Clothes",
    amount: 8000,
    date: new Date("2022-09-05"),
  },
];

const ExpenseOutput = ({ expenses, expensePeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensePeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:Colors.PrimaryLight
    }
});
export default ExpenseOutput;
