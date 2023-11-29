import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1EAED7',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ffff',
    borderStyle: 'solid',
    borderWidth: 7,
    borderRadius: 10,
    margin: 6,
    height: '20%',
    width: '70%',
  },
  text: {
    color: 'white',
    fontSize: 28,
  },
  questionText: {
    color: 'white',
    fontSize: 30,
    marginBottom: 25,
  },
});

export default styles;
