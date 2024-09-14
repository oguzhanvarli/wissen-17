import { Button, Text, View } from "react-native"
import React from "react"
import Header from "./src/samples/propSample/Header"
import Main from "./src/samples/propSample/Main"
import Footer from "./src/samples/propSample/Footer"
import CounterSample from "./src/samples/counterSample/CounterSample"
import Home from "./src/screens/Home"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Detail from "./src/screens/Detail"
import Favorites from "./src/screens/Favorites"
import { Provider } from "react-redux"
import { store } from "./src/store/store"

const Stack = createNativeStackNavigator()

const App = () => {

  let headerText = "Merhaba Header, ben App.js den geldim"
  let mainText = "Merhaba Main, ben App.js den geldim"
  let footerText = "Merhaba Footer, ben App.js den geldim"

  return (
    <>
      {/* <Header yazi={headerText} />
      <Main yazi2={mainText}/>
      <Footer footerText={footerText}  deneme={12} test={[1,2,3,4,5]}/> */}
      {/* <CounterSample/> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Favorites" component={Favorites} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>

    </>
  )
}

export default App


//Div => View
//p, h1, h2,h3,h4.... => Text
//img => Image
//button => Button