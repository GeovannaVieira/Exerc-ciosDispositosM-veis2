import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function CalculadoraCombustivel() {
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [resultado, setResultado] = useState('');
  const [error, setError] = useState('');

  const calcular = () => {
    const alcool = parseFloat(precoAlcool);
    const gasolina = parseFloat(precoGasolina);

    // Validação para valores não numéricos
    if (isNaN(alcool) || isNaN(gasolina)) {
      setError('Por favor, insira números válidos.');
      setResultado('');
    } else {
      setError('');
      const proporcao = alcool / gasolina;

      if (proporcao < 0.7) {
        setResultado('Álcool é mais vantajoso.');
      } else {
        setResultado('Gasolina é mais vantajosa.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Combustível</Text>

      <TextInput
        style={styles.input}
        placeholder="Preço do Álcool"
        keyboardType="numeric"
        value={precoAlcool}
        onChangeText={setPrecoAlcool}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina"
        keyboardType="numeric"
        value={precoGasolina}
        onChangeText={setPrecoGasolina}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity 
        style={styles.button} 
        onPress={calcular}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {resultado !== '' && (
        <Text style={styles.resultado}>{resultado}</Text>
      )}
    </View>
  );
}

