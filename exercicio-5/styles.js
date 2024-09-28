import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#888',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 20,
    marginBottom: 15,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#F57C00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  resultado: {
    fontSize: 25,
    color: '#388E3C',
    marginTop: 20,
  },
  classificacao: {
    fontSize: 22,
    color: '#000',
    marginTop: 10,
    fontWeight: 'bold',
  },
  error: {
    color: '#D32F2F',
    fontSize: 18,
    marginTop: 10,
  },
});
