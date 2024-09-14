import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { arttir, azalt } from '../store/slices/counterSlice'

const Main = () => {

  //BURADA DEĞİŞİKLİ YAPACAĞIM İÇİN(SET) USEDISPATCH KULLANIYORUM

  const dispatch = useDispatch()
  return (
    <View>
      <Button title="Arttır" onPress={() => dispatch(arttir())} />
      <Button title="Azalt" onPress={() => dispatch(azalt())} />
    </View>
  )
}

export default Main

const styles = StyleSheet.create({})