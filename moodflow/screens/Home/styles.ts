import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#1EAED7',
  },
  quoteContainer: {
    flex: 1,
    alignItems: 'center',
  },
  quoteHeader: {
    paddingBottom: 10,
  },
  quoteHeaderText: {
    color: 'white',
    backgroundColor: '#1EAED7',
    fontSize: 22,
  },
  quoteText: {
    color: 'white',
    fontSize: 28,
    marginHorizontal: 25,
    fontStyle: 'italic',
  },
  iconContainer: {
    flex: 1,
    width: '75%',
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;
