import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#1EAED7',
  },
  inputStyle: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
    minHeight: 75,
    minWidth: 225,
    margin: 15,
    color: 'white',
    textAlign: 'center',
  },
  buttonSpacing: { margin: 10 },
  loginButtons: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    minWidth: 250,
    minHeight: 50,
  },
  buttonText: {
    color: '#1EAED7',
    fontSize: 24,
  },
});

export default styles;
