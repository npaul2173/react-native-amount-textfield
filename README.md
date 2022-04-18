# React Native Amount Textfield

This library gives you a Amount TextField component, which has formatted value based on International Currency standard.  The component return back float value ( the actual Number) and a Formatted value which can be saved in a state and used for display inside the component.

### Installation and use

 

Clone this repository:

```
git clone https://github.com/npaul2173/react-native-amount-textfield#readme
```

Install npm packages:

```
npm install @react-native-amount-textfield 
yarn add @react-native-amount-textfield
```
  

### Sample Implementation

```
const App = () => {
  const [amount, setAmount] = useState<string | null>(null)
 
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
```
