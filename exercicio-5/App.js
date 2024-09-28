import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function CalculadoraIMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  const [classificacao, setClassificacao] = useState('');
  const [error, setError] = useState('');

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    // Validação de valores numéricos
    if (isNaN(pesoNum) || isNaN(alturaNum)) {
      setError('Por favor, insira números válidos para peso e altura.');
      setResultado('');
      setClassificacao('');
    } else {
      setError('');
      const imc = pesoNum / (alturaNum * alturaNum);
      setResultado(`Seu IMC é: ${imc.toFixed(2)}`);

      if (imc < 18.5) {
        setClassificacao('Baixo peso');
      } else if (imc >= 18.5 && imc <= 24.9) {
        setClassificacao('Peso adequado (eutrofia)');
      } else if (imc >= 25 && imc <= 29.9) {
        setClassificacao('Sobrepeso');
      } else if (imc >= 30 && imc <= 34.9) {
        setClassificacao('Obesidade grau 1');
      } else if (imc >= 35 && imc <= 39.9) {
        setClassificacao('Obesidade grau 2');
      } else if (imc >= 40) {
        setClassificacao('Obesidade extrema');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity 
        style={styles.button} 
        onPress={calcularIMC}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {resultado !== '' && (
        <Text style={styles.resultado}>{resultado}</Text>
      )}

      {classificacao !== '' && (
        <Text style={styles.classificacao}>{classificacao}</Text>
      )}
    </View>
  );
}
