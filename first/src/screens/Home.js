import { View, Text, Button, StyleSheet, ScrollView, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardComponent from '../components/CardComponent'
import { colors } from '../theme/colors'
import { useSelector } from 'react-redux'


const Home = ({ navigation }) => {

  const { value } = useSelector(state => state.favorites)
  console.log(value)

  const [data, setData] = useState({})

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      // console.log("Data çekme işlemi yapıldı")
      let response = await axios.get('https://rickandmortyapi.com/api/character')
      // console.log(response.data)
      //data = response.data   //Ekranda anlık olarak gösteremeyeceğim için burada usestate kullanmam gekekmektedir.
      setData(response.data)
    } catch (error) {
      console.log('Get Charcter Error')
    }
  }

  const goDetail = (item) => {
    navigation.navigate("Detail", { character: item })
  }

  const test = (name) => {
    console.log("Merhaba Ben Çalıştım")
    console.log("Merhaba" + name)
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
      {/* <Button title='Tıkla' onPress={test}/> */}

      <FlatList
        data={data.results}
        renderItem={({ item }) =>
          <CardComponent item={item} goDetail={goDetail} />
        }
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <Button title={`Favorites - ${value}`} onPress={() => navigation.navigate("Favorites")}
            color={colors.favorites}
          />
        }
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