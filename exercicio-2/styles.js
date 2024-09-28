import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F57C00',
    marginBottom: 30,
  },
  countBox: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#000',
    marginBottom: 50,
  },
  countText: {
    fontSize: 80,
    color: '#D32F2F',
  },
  button: {
    width: 200,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonIncrease: {
    backgroundColor: '#4CAF50',
  },
  buttonDecrease: {
    backgroundColor: '#D32F2F',
  },
  buttonText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
});
