import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [age, setAge] = useState<string>('');
  const ageAsNumber : number = !isNaN(Number(age)) === true ? Number(age) : 0;
  const lower: number = Math.round((220 - ageAsNumber) * 0.65);
  const upper: number = Math.round((220 - ageAsNumber) * 0.85);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      <Text>Enter your age:</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Age"
        value={age}
        onChangeText={text => setAge(text)}
      />
      <Text>Lower limit: {lower.toFixed(2)}</Text>
      <Text>Upper limit: {upper.toFixed(2)}</Text>
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    marginVertical: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 100,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});
