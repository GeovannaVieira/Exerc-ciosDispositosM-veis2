import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
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
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  error: {
    color: '#D32F2F',
    fontSize: 18,
    marginTop: 10,
  },
  result: {
    color: '#333',
    fontSize: 22,
    marginTop: 20,
    textAlign: 'center',
  },
});

