import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#69ABD1',
  },
  quoteContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -200,
  },
  // quoteHeader: {
  //   paddingBottom: 10,
  // },
  quoteHeaderText: {
    color: 'white',
    backgroundColor: '#69ABD1',
    fontSize: 30,
    alignSelf: 'flex-start',
    paddingLeft: 20,
    fontWeight: 'bold',
  },
  quoteText: {
    color: 'white',
    fontSize: 28,
    marginHorizontal: 25,
    fontStyle: 'italic',
    backgroundColor: '#348EC2',
    padding: 20,
    paddingVertical: 40,
    borderRadius: 20,
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
  quote1: {
    alignSelf: 'flex-start',
  },
  quote2: {
    alignSelf: 'flex-end',
  },
});

export default styles;
