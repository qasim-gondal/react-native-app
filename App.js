import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View, TextInput ,ScrollView} from 'react-native';

export default function App() {

  //this is initial state that have a defaule value 'Qasim'
  const [titleText, setTitleText] = useState('Qasim')
  //this is just a text variable
  const bodyText = 'This is react native dev Qasim'
  //this is the lamda function that change the initial state to 'Muhammad Qasim'
  const onPresstitle = () => {
    setTitleText('Muhammad Qasim')
  };

  //text field
  const [text, onChangeText] = useState('UseLess Text')
  const [number, onChangeNumber] = useState('')
  return (
    
    <View style={styles.container}>
   <ScrollView style={styles.scrollView}>

      <Text style={styles.titleText} onPress={onPresstitle} >{titleText}</Text>
      <TextInput
      style = {styles.input}
      onChangeText={onChangeText}
      placeholder='Type your email'
      keyboardType= 'email-address'
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
      <Button
        style={styles.Button}
        title='Press me'
        onPress={() => Alert.alert('Simple Button pressed')}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  Button: {
    color: '#f194ff'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  scrollView: {
    backgroundColor: 'pink',
  }
});
