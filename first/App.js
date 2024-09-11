import { Button, Text, View } from "react-native"
import React from "react"
import Header from "./src/samples/propSample/Header"
import Main from "./src/samples/propSample/Main"
import Footer from "./src/samples/propSample/Footer"
import CounterSample from "./src/samples/counterSample/CounterSample"

const App = () => {

  let headerText = "Merhaba Header, ben App.js den geldim"
  let mainText = "Merhaba Main, ben App.js den geldim"
  let footerText = "Merhaba Footer, ben App.js den geldim"

  return (
    <>
      {/* <Header yazi={headerText} />
      <Main yazi2={mainText}/>
      <Footer footerText={footerText}  deneme={12} test={[1,2,3,4,5]}/> */}
      <CounterSample/>
    </>
  )
}

export default App


//Div => View
//p, h1, h2,h3,h4.... => Text
//img => Image
//button => Button