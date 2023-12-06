import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#69ABD1',
  },
  quoteContainer: {
    flex: 2,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    backgroundColor: '#69ABD1',
    fontSize: 22,
    textAlign: 'center',
  },
  linkText: {
    color: 'blue',
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 25,
    fontStyle: 'bold',
    marginTop: 10,
  },
  underline: {
    textDecorationLine: 'underline',
  },
});

export default styles;
