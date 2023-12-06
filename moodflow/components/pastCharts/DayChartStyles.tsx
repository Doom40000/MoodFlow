import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#A1DBFA',
    flexDirection: 'row',
  },
  textWhite: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textRed: {
    color: '#503047',
    // color: '#AF4A35',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textGreen: {
    color: '#346729',
    fontSize: 20,
    fontWeight: 'bold',
  },
  question: {
    fontWeight: 'bold',
    color: '#000004',
    fontSize: 20,
  },
  listContainer: {
    flex: 2,
    borderColor: '#ffff',
    borderStyle: 'solid',
    borderWidth: 7,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 50,
    width: '95%',
    height: '100%',
    paddingHorizontal: 0,
    marginBottom: 10,
    backgroundColor: '#A1DBFA',
  },
});

export default styles;
