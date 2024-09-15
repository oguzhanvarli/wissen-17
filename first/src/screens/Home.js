import { View, Text, Button, StyleSheet, ScrollView, FlatList, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardComponent from '../components/CardComponent'
import { colors } from '../theme/colors'
import { useSelector } from 'react-redux'


const Home = ({ navigation }) => {

  const { value } = useSelector(state => state.favorites)
  const [pageNumber, setPageNumber] = useState(1)

  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (pageNumber < 42) {
      getNextPage()
    }
  }, [pageNumber])


  const getData = async () => {
    try {
      // console.log("Data çekme işlemi yapıldı")
      let response = await axios.get('https://rickandmortyapi.com/api/character')
      // console.log(response.data)
      //data = response.data   //Ekranda anlık olarak gösteremeyeceğim için burada usestate kullanmam gekekmektedir.
      setData(response.data.results)
    } catch (error) {
      console.log('Get Charcter Error')
    }
  }

  const goDetail = (item) => {
    navigation.navigate("Detail", { character: item })
  }

  const getNextPage = async () => {
    try {
      // console.log("worked")
      // console.log(pageNumber)
      let response = await axios.get("https://rickandmortyapi.com/api/character?page=" + pageNumber)
      setData([...data, ...response.data.results])
    } catch (error) {
      console.log("Get Next Page Error")
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
      {/* <Button title='Tıkla' onPress={test}/> */}
      <FlatList
        data={data}
        renderItem={({ item }) =>
          <CardComponent item={item} goDetail={goDetail} />
        }
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <Button title={`Favorites - ${value}`} onPress={() => navigation.navigate("Favorites")}
            color={colors.favorites}
          />
        }
        //Infinity Scroll
        onEndReached={() => setPageNumber(pageNumber + 1)}
        onEndReachedThreshold={3}
        ListFooterComponent={
          <>
            {pageNumber === 42 ? <Text>Tüm Datayı Gördün</Text> :
              <View style={{ margin: 15 }}>
                <ActivityIndicator color={colors.favorites} size={"large"} />
              </View>
            }
          </>
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



//SPREAD OPERATORU
// let testData = [1,2,3,45,6,7]
// let testData2 = ["a","b","c"]

// // console.log(testData)
// console.log(...testData)

// // console.log(testData2)
// console.log(...testData2)

// let testArray = [testData, testData2]
// console.log(testArray)

// let testArray2 = [...testData, ...testData2]
// console.log(testArray2)