import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  StyleSheet,View, TextInput,Text,Button } from 'react-native';

export default function App() {

  const [textField,onChangeText] = useState('Goal...')
  return (
    <View style = {styles.appContainer}>

      <View style = {styles.inputContainer}>
        <TextInput style = {styles.textInput} onChangeText={onChangeText} placeholder='Your course goal!' />
        <Button title='Add Goal'></Button>
      </View>


      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 60
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cf5e5ec',
    width: '80%',
    marginRight: 8,
    padding: 8
  }
});




@Composable
fun Counter() {
    var count by remember { mutableStateOf(0) }
    Button(onClick = { count++ }) {
        Text(text = "Count: $count")
    }
}