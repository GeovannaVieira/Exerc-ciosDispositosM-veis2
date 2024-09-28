import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';

export default function App() {
  const [numeroGerado, setNumeroGerado] = useState(null);
  const [palpite, setPalpite] = useState('');
  const [resultado, setResultado] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const gerarNumero = () => {
    const numero = Math.floor(Math.random() * 11); // Gera um número aleatório de 0 a 10
    setNumeroGerado(numero);
    setResultado(''); // Reseta o resultado ao gerar um novo número
    setPalpite('');   // Reseta o palpite
    setMensagemErro(''); // Reseta a mensagem de erro
  };

  const verificarPalpite = () => {
    const palpiteNum = parseInt(palpite);
    
    if (isNaN(palpiteNum) || palpiteNum < 0 || palpiteNum > 10) {
      setMensagemErro('Por favor, insira um número válido de 0 a 10.');
      setResultado('');
    } else {
      setMensagemErro('');
      if (palpiteNum === numeroGerado) {
        setResultado(`Parabéns! Você acertou! O número era ${numeroGerado}.`);
      } else {
        setResultado(`Você errou. O número era ${numeroGerado}.`);
      }
    }
  };

  return (
    <View style={styles.container}>
      {numeroGerado === null ? (
        <>
          <Text style={styles.text}>Pense em um número de 0 a 10</Text>
          <TouchableOpacity style={styles.button} onPress={gerarNumero}>
            <Text style={styles.buttonText}>Gerar Número</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.text}>Qual é o seu palpite?</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Digite um número"
            value={palpite}
            onChangeText={setPalpite}
          />
          {mensagemErro ? <Text style={styles.error}>{mensagemErro}</Text> : null}
          <TouchableOpacity style={styles.button} onPress={verificarPalpite}>
            <Text style={styles.buttonText}>Verificar Palpite</Text>
          </TouchableOpacity>
          {resultado ? <Text style={styles.result}>{resultado}</Text> : null}
          <TouchableOpacity style={styles.button} onPress={gerarNumero}>
            <Text style={styles.buttonText}>Jogar de Novo</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

