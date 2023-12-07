import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bigHeading: {
    fontSize: 32,
    color: '#FFFFFF',
    marginBottom: 24,
    alignSelf: 'center',
  },
  mediumHeading: {
    fontSize: 20,
    color: '#FFFFFF',
    marginTop: 16,
    marginBottom: 16,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#69ABD1',
    width: '100%',
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
    backgroundColor: '#69ABD1',
  },
  buttonTextSecondary: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#FFFFFF'
  },
  buttonTextPrimary: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#69ABD1'
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#69ABD1',
  },
  smallInput: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#FFFFFF',
    color: '#FFFFFF',
  },
  bigInput: {
    padding: 10,
    minHeight: 250,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#FFFFFF',
    color: '#FFFFFF',
    textAlignVertical: 'top',
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
