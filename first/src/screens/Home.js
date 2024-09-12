import { View, Text, Button, StyleSheet, ScrollView, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardComponent from '../components/CardComponent'


const Home = () => {

  const [data, setData] = useState({})

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      console.log("Data çekme işlemi yapıldı")
      let response = await axios.get('https://rickandmortyapi.com/api/character')
      // console.log(response.data)
      //data = response.data   //Ekranda anlık olarak gösteremeyeceğim için burada usestate kullanmam gekekmektedir.
      setData(response.data)
    } catch (error) {
      console.log('Get Charcter Error')
    }
  }

  return (
    <View>
      {/* <Button title='Get Data' onPress={getData} /> */}
      {/* MAP İLE DATA ÇEKME
      {
        data.results && data.results.map((character, key) => (
          <Text key={key} style={styles.title}>{character.name}</Text>
        ))
      }*/}
      <FlatList
        data={data.results}
        renderItem={({ item }) =>
          <CardComponent item={item} />
        }
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: "green",
    fontWeight: "600",
    marginBottom: 30
  }
})