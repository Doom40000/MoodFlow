import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bigHeading: {
    fontSize: 38,
    color: '#FFFFFF',
    marginBottom: 24,
    alignSelf: 'center',
  },
  mediumHeading: {
    fontSize: 32,
    color: '#FFFFFF',
    marginTop: 16,
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  container: {
    flex: 1,
    padding: 20,
    alignContent: 'center',
    backgroundColor: '#1FADD7',
    width: '100%',
    justifyContent: 'space-between'
  },
  buttonPrimary: {
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    alignContent: 'center',
    padding: 20,
    marginVertical: 16,
    justifyContent: 'center',
    elevation: 2,
  },
  buttonSecondary: {
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    padding: 20,
    elevation: 2,
    backgroundColor: '#1FADD7',
  },
  buttonTextSecondary: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#FFFFFF'
  },
  buttonTextPrimary: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#1FADD7'
  },
  noteButton: {
    backgroundColor: '#FFFFFF',
    height: 40,
    width: 40,
    borderRadius: 4,
    alignSelf: 'center'
  },
});

export default styles;