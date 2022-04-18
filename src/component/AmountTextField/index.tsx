import React from 'react'
import { TextInput, TextInputProps } from 'react-native'

export interface AmountTypes {
  formattedValue: string
  floatValue: number
  error: boolean
}
export type AmountTextFieldProps = Pick<TextInputProps, 'style'> & {
  precision?: number
  value: string | null
  onChangeValue?: (value: AmountTypes) => void
}

// const regex = /^-?[0-9]*\.?[0-9]+$/gm

const numberWithCommas = (x: string) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const AmountTextField: React.FC<AmountTextFieldProps> = ({
  precision = 2,
  value,
  onChangeValue,
  ...props
}) => {
  const formatAndCallback = (
    formattedValue: string,
    error: boolean,
    decimalLength: number
  ) => {
    const updatedString = formattedValue.replace(/,/g, '')
    const floatValue = error
      ? `${updatedString}00`
      : decimalLength === 1
      ? `${updatedString}0`
      : updatedString

    onChangeValue?.({
      formattedValue,
      floatValue: parseFloat(floatValue),
      error,
    })
  }
  return (
    <>
      <TextInput
        value={value!}
        placeholder='Enter Amount'
        keyboardType='decimal-pad'
        onChangeText={(newValue) => {
          const updatedString = newValue.replace(/,/g, '')
          const valueSplit = updatedString.split('.')
          const decimalPortion = valueSplit[1]
          const frontNumberString = valueSplit[0]
          const frontNumber = numberWithCommas(frontNumberString)

          if (decimalPortion && decimalPortion.length <= precision) {
            const newFormattedNumber = `${frontNumber}.${decimalPortion}`
            formatAndCallback(newFormattedNumber, false, decimalPortion.length)
          }

          if (decimalPortion === undefined) {
            const newFormattedNumber = `${frontNumber}`
            formatAndCallback(newFormattedNumber, false, 0)
          }
          if (decimalPortion === '') {
            const newFormattedNumber = `${frontNumber}.`
            formatAndCallback(newFormattedNumber, true, 0)
          }
        }}
        {...props}
      />
    </>
  )
}
