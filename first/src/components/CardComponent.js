import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Card } from '@rneui/themed';

const CardComponent = ({item}) => {
  return (
    <Card>
      <Card.Title>{item.name}</Card.Title>
      <Card.Divider />
      <View style={{ position: "relative", alignItems: "center" }}>
        <Image
          style={{ width: "100%", height: 250 }}
          resizeMode="contain"
          source={{ uri: item.image }}
        />
        <Text >{item.status}</Text>
      </View>
    </Card>
  )
}

export default CardComponent

const styles = StyleSheet.create({})