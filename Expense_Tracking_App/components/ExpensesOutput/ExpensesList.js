import React from "react";
import { FlatList, Text } from "react-native";

function renderExpenseItem(itemData){
    return <Text>{itemData.item.description}</Text>

}

const ExpensesList = ({expenses}) => {
  return <FlatList data={expenses} renderItem={renderExpenseItem}/>;
};

export default ExpensesList;
