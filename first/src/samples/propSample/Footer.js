import { View, Text } from 'react-native'
import React from 'react'

const Footer = ({footerText}) => {
  return (
    <View>
      <Text>{footerText}</Text>
    </View>
  )
}

export default Footer