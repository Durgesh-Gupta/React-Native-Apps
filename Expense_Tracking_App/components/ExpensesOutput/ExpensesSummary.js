import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  },0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>Rs.{expensesSum.toFixed(2)}</Text>
    </View>
  );
};
const styles=StyleSheet.create({
    container:{
        padding:8,
        borderRadius:6,
        backgroundColor:Colors.Third,
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center'
    },
    period:{
        fontSize:12,
        color:Colors.SecondaryText
    },
    sum:{
        fontSize:16,
        fontWeight:'bold',
        color:Colors.SecondaryText
    }
})

export default ExpensesSummary;
