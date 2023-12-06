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
  quoteHeader: {
    paddingBottom: 10,
  },
  quoteHeaderText: {
    color: 'white',
    backgroundColor: '#69ABD1',
    fontSize: 22,
  },
  quoteText: {
    color: 'white',
    fontSize: 28,
    marginHorizontal: 25,
    fontStyle: 'italic',
  },
});

export default styles;
