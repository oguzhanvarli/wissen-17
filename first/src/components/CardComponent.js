import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card } from '@rneui/themed';

const CardComponent = ({ item, goDetail }) => {
  return (
    <TouchableOpacity onPress={() => goDetail(item)}>
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
    </TouchableOpacity>
  )
}

export default CardComponent

const styles = StyleSheet.create({})