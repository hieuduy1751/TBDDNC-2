import { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, Keyboard } from "react-native";

export default function SumCal() {
  const [a, onChangeA] = useState('');
  const [b, onChangeB] = useState('');
  const [c, onChangeC] = useState('');
  return (
    <View style={styles.content}>
      <View style={styles.contentBox}>
        <Text style={styles.textTitle}>Sum</Text>
        <Text>Input a:</Text>
        <TextInput keyboardType='numeric' placeholder='Input a' style={styles.textInput} value={a} onChangeText={onChangeA}></TextInput>
        <Text>Input b:</Text>
        <TextInput keyboardType='numeric' placeholder='Input b' style={styles.textInput} value={b} onChangeText={onChangeB}></TextInput>
        <Button title='Calculate' onPress={() => getFormValue(a, b, onChangeC)}></Button>
        <TextInput keyboardType='numeric' placeholder='c Value' style={styles.textInput} value={c} editable={false}></TextInput>
      </View>
    </View>
  )
}

const getFormValue = (a: string, b: string, onChangeC: Function): void => {
  const aValue = parseInt(a);
  const bValue = parseInt(b);
  const result = aValue + bValue;
  onChangeC(result.toString());
  Keyboard.dismiss();
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentBox: {
    width: 350,
    height: 400,
    backgroundColor: '#B7C4CF',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    backgroundColor: '#EEE3CB',
    borderRadius: 5,
    width: 250,
    height: 50,
    marginVertical: 20,
    paddingHorizontal: 10
  }
})