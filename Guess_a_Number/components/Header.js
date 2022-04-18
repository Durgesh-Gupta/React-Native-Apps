import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import Colors from "../constants/colors"

const Header = props => {
  return (
    <View style={style.Header}>
        <Text style={style.headerTitle}>{props.title}</Text>
    </View>
  )
}
const style=StyleSheet.create({
    Header:{
        width:'100%',
        height:90,
        paddingTop:36,
        backgroundColor:"#f7287b",
        alignItems:"center",
        justifyContent:"center"
    },
    headerTitle:{
        color:"black",
        fontSize:10
    }
})

export default Header