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
    marginHorizontal: 5,
    marginBottom: 25,
  },
  inp: {
    // height: 40,
    // width: 100,
    // margin: 12,
    // borderWidth: 1,
    // padding: 10,
    // borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ffff',
    borderStyle: 'solid',
    borderWidth: 7,
    borderRadius: 10,
    margin: 6,
    padding: 10,
    height: '20%',
    width: '70%',
    color: 'white',
    fontSize: 20
}
});

export default styles;
