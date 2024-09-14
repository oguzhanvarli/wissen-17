import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './src/components/Header'
import Main from './src/components/Main'
import { Provider } from 'react-redux'
import { store } from './src/store/store'

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})