import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [limits, setLimits] = useState({ lower: 0, upper: 0 });
  
  const calculateLimits = () => {
    const numericAge = parseInt(age);
    if (isNaN(numericAge) || numericAge <= 0) {
      alert('lease enter a valid age');
      return;
    }

    const lower = (220 - numericAge) * 0.65;
    const upper = (220 - numericAge) * 0.85;
    setLimits({ lower, upper });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.field}
        keyboardType="numeric"
        placeholder="Age"
        value={age}
        onChangeText={setAge}
      />

      <Text style={styles.field}>Limits</Text>
      <Text style={styles.result}>
        {limits ? `${limits.lower} - ${limits.upper}` : '---'}
      </Text>

    <Button title="CALCULATE" onPress={calculateLimits}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 10
  },
  field: {
    marginBottom: 10
  }
});
///fggegnowe