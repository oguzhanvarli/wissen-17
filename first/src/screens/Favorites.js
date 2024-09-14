import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CardComponent from '../components/CardComponent'

const Favorites = () => {
  const {favArray} = useSelector(state => state.favorites)
  return (
    <View>
      <FlatList
        data={favArray}
        renderItem={({item}) => 
        <CardComponent item={item} />
      }
      // keyExtractor={item => item.id}
      />
    </View>
  )
}

export default Favorites

const styles = StyleSheet.create({})