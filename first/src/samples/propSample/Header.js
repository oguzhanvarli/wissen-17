import { View, Text } from 'react-native'
import React from 'react'

const Header = (prop) => {
  console.log(prop.yazi)
  return (
    <View>
      <Text>{prop.yazi}</Text>
    </View>
  )
}

export default Header

//react native function export ==> rnfe