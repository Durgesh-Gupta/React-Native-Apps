import React from "react";
import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
  return (
    <ExpenseItem
      //   description={itemData.item.description}
      //   amount={itemData.item.amount}
      //   date={itemData.item.date}
      {...itemData.item}
    />
  );
}

const ExpensesList = ({ expenses }) => {
  return <FlatList data={expenses} renderItem={renderExpenseItem} />;
};

export default ExpensesList;
