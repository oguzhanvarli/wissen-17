import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const CounterSample = () => {

  console.log("MErhaba ben render oldum")
  

  //USESTATE ÖĞRENMEDEN ÖNCE
  let counterNumber = 0

  //Arrow Function
  // const decrement = () => {
  //   console.log("worked")
  //   counterNumber -= 1
  //   console.log(counterNumber)
  // }

  //Fuction
  // function increment(){
  //   counterNumber += 1
  //   console.log(counterNumber)
  // }

  //USESTATE ÖĞRENDİKTEN SONRA
  const [counterOkuma, counterDegistirme] = useState(0)

  const decrement = () => {
    if(counterOkuma > 0) counterDegistirme(counterOkuma - 1)
  }

  function increment(){
    if(counterOkuma < 10){
      counterDegistirme(counterOkuma + 1)
    }
  }

  return (
    <View>
      <Text style={{textAlign: "center", fontSize: 40, color: "indianred"}}>{counterOkuma}</Text>
      <Button title='Azalt' onPress={decrement}/>
      <Button title='Arttır' onPress={increment} />
    </View>
  )
}

export default CounterSample