import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Multiplicador() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  const calcular = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    // Validação de erro para não-números
    if (isNaN(n1) || isNaN(n2)) {
      setError('Por favor, insira números válidos.');
      setResultado(null);
    } else {
      setError('');
      setResultado(n1 * n2);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Multiplicador de Números</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity 
        style={styles.button} 
        onPress={calcular}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {resultado !== null && (
        <Text style={styles.resultado}>Resultado: {resultado}</Text>
      )}
    </View>
  );
}

