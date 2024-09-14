import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardComponent from '../components/CardComponent'
import { colors } from '../theme/colors'
import { useDispatch } from 'react-redux'
import { addFavorites } from '../store/slices/favoritesSlice'

const Detail = ({route}) => {
  const {character} = route.params
  const dispatch = useDispatch()
  
  return (
    <View>
      <CardComponent item={character} goDetail={undefined} />
      <Button title="Add" color={colors.favorites} onPress={() => dispatch(addFavorites(character))} />
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({})