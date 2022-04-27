import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DefaultText = props => {
  return (
    <View>
        <Text>{props.children}</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    text:{fontFamily:'open-sans'}
})

export default DefaultText