import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  AmountTextField,
  getFormattedFloatNumber,
} from 'react-native-amount-textfield'

const App = () => {
  const [amount, setAmount] = useState<string | null>(null)

  console.log('====================================')
  console.log(getFormattedFloatNumber(2323434.454, 2))
  console.log('====================================')
  return (
    <View style={styles.container}>
      <AmountTextField
        style={styles.textInputStyles}
        value={amount}
        onChangeValue={(values) => {
          console.log('Onchange -->', values)
          setAmount(values.formattedValue)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textInputStyles: {
    width: 200,
    height: 60,
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: '#efefef',
  },
})
export default App
