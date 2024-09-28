import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function MeuPerfilProfissional() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileSection}>
        <Text style={styles.title}>Geovanna Santos</Text>
        <Image 
          source={{ uri: 'https://media.licdn.com/dms/image/v2/D4D03AQEmesjdjDGYvA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722520380486?e=1732752000&v=beta&t=x-TOuoUlsk1JaEI0hBgPOFO5Xs1z0xHe3PrW9WYcIp8' }} 
          style={styles.photo} 
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dados Pessoais:</Text>
        <Text style={styles.text}>Nome: Geovanna Vieira Cintra Santos</Text>
        <Text style={styles.text}>Idade: 20</Text>
        <Text style={styles.text}>Localização: Santos, Brasil</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Formação:</Text>
        <Text style={styles.text}>Sistemas para Internet</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiência:</Text>
        <Text style={styles.text}>Sem experiência</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projetos:</Text>
        <Text style={styles.text}>- App Contador de Pessoas</Text>
        <Text style={styles.text}>- App Brotinhos Baby e Kids</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#9F71E2', 
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#371E56', 
  },
  section: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#9F71E2',
    borderRadius: 10,
    backgroundColor: '#ffffff', 
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#371E56', 
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
});
