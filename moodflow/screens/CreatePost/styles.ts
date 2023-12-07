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
  },
  inputContainer: {
    flex: 10,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  promptText: {
    color: 'white',
    fontSize: 28,
    marginVertical: 25,
  },
  postInput: {
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    width: '85%',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 5,
    marginBottom: 15,
  },
  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 5,
    padding: 5,
  },
  submitText: {
    color: 'white',
    fontSize: 32,
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioLabel: {
    marginLeft: 2,
    fontSize: 16,
    color: '#333',
  },
  separator: {
    marginLeft: 2,
    fontSize: 20,
  },
});

export default styles;
