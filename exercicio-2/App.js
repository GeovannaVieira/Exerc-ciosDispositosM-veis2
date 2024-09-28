import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function ContadorDePessoas() {
  const [count, setCount] = useState(0);

  const aumentar = () => setCount(count + 1);

  const diminuir = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de Pessoas</Text>

      <View style={styles.countBox}>
        <Text style={styles.countText}>{count}</Text>
      </View>

      <TouchableOpacity 
        style={[styles.button, styles.buttonIncrease]} 
        onPress={aumentar}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.buttonDecrease]} 
        onPress={diminuir}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}


