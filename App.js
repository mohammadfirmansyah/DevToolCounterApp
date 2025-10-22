import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  const submitName = () => {
    console.log('User Name:', name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React DevTools Example</Text>
      <Text style={styles.counter}>Counter: {counter}</Text>
      <Button title="Increase" onPress={increaseCounter} />
      <Button title="Decrease" onPress={decreaseCounter} />
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={setName}
        value={name}
      />
      <Button title="Submit" onPress={submitName} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default App;
