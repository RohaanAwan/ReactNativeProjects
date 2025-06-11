import React, { useState } from 'react'
import {
  View, SafeAreaView, Text, StyleSheet, TouchableOpacity
} from 'react-native'

const Calculator = () =>
{
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const pressFunction =(value) => {
    setInput((prev) => prev + value);
  };
  const clearButton =() => {
    setInput('');
    setResult('');
  };

  const Calculate =() => {
    filtered = input.replace(/×/g, '*');
    filteredInput = filtered.replace(/÷/g, '/');
    const evalResult = global.eval(filteredInput);
    setResult(String(evalResult));
  };

  const buttons = [
    ['7', '8', '9', '÷'],
    ['4', '5', '6', '×'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.clearButton} onPress={clearButton}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
      </View>

       {buttons.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.buttonRow}>
          {row.map((btn) => (
            <TouchableOpacity
              key={btn}
              style={styles.button}
              onPress={() =>
                btn === '=' ? Calculate() : pressFunction(btn)
              }>
              <Text style={styles.buttonText}>{btn}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}

    </SafeAreaView>
    
  );

};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#000000', padding: 20},
  display: 
  {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 20,
  },
  input: {
    fontSize: 52,
    color: '#ffffff',           
  },
  result: {fontSize: 52, fontWeight: 'bold', color: '#ea8300'},
  buttonRow: {flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10},
  button: 
  {
    flex: 1,
    backgroundColor: '#5a5a5a',
    margin: 5,
    padding: 20,
    alignItems: 'center',
    borderRadius: 8,
  },
  clearButton: 
  {
    flex: 1,
    backgroundColor: '#ea8300',
    margin: 5,
    padding: 20,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 24,
    color: '#ffffff'
  },
});

export default Calculator;