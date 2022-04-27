import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Colors from "../../constants/Colors"

const ExpenseItem = ({description,amount,date}) => {
    console.log(date.toString())
  return (
      <View style={styles.expenseItem}>
        <View>
          <Text>{description}</Text>
          {/* <Text>{date.toString()}</Text> */}
        </View>
        <View>
          <Text>{amount}</Text>
        </View>
      </View>
  );
};

const styles=StyleSheet.create({
expenseItem:{
    padding:12,
    marginVertical:8,
    backgroundColor:Colors.PrimaryText,
    flexDirection:'row',
    justifyContent:'space-between',
    elevation:3,
    borderRadius:6,
    shadowColor:Colors.Third,
    shadowOffset:{width:1,height:1}
}
})
export default ExpenseItem;
