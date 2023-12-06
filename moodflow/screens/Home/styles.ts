import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#69ABD1',
  },
  quoteContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    // height: 20,
    // width: 200
  },
  // quoteHeader: {
  //   paddingBottom: 10,
  // },
  // quoteHeaderText: {
  //   color: 'white',
  //   backgroundColor: '#69ABD1',
  //   fontSize: 22,
  // },
  quoteText: {
    color: 'white',
    fontSize: 28,
    marginHorizontal: 25,
    fontStyle: 'italic',
    backgroundColor: '#348EC2',
    padding: 20
  },
});

export default styles;
