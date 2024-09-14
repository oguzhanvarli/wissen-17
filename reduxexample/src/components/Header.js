import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

  //OKUMA İŞLEMİ YAPACAĞIM İÇİN USESELECTOR KULLANDIM
  const {value} = useSelector(state => state.counter)
  console.log(value)
  return (
    <View>
      <Text style={styles.textStyle}>{value}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center"
    ,fontSize: 50,
    margin: 20,
    color: "red",
    fontWeight: "700"
  }
})