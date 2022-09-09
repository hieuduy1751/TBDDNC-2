import { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { StyleSheet } from 'react-native';

export default function NameInput() {
  const [text, onChangeText] = useState('');
  const [showText, onShowTextChange] = useState(false);
  return (
    <View style={styles.content}>
      <View style={styles.contentBox}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(text: string) => {
            onChangeText(text);
            onShowTextChange(false);
          }}
          placeholder='Input name'
        ></TextInput>
        <Button
          title="Show name"
          onPress={() => onShowTextChange(!showText)}
        ></Button>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {showText ? 'Hello: ' + text : ''}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100vh',
    padding: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentBox: {
    height: 300,
    width: 250,
    borderRadius: 20,
    backgroundColor: '#CDF0EA',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 50
  },
  input: {
    height: 40,
    width: 200,
    marginBottom: 10,
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#FAF4B7'
  },
  button: {
    padding: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red',
    backgroundColor: '#c4c4c4'
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  },
  textContainer: {
    width: '100%',
    justifyContent: 'center'
  }
});