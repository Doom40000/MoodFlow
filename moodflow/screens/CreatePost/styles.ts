import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#1EAED7',
  },
  logoContainer: {
    flex: 0.5,
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  inputContainer: {
    flex: 10,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  promptText: {
    color: 'white',
    fontSize: 28,
    marginVertical: 25,
  },
});

export default styles;
