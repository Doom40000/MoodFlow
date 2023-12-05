import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    paddingTop: 16,
    paddingHorizontal: 12,
    backgroundColor: '#3BBCE3',
    borderRadius: 8,
    marginBottom: 16,
  },
  commentsContainer: {
    flex: 2
  },  
  modalContainer: {
    backgroundColor: '#1FADD7',
    flex: 1
  },
  profileIcon: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: '#FFD8BE',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIconText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 1,
    marginRight: 1
  },
  smallText: {
    color: '#FFFFFF',
    fontSize: 14,
    opacity: 0.9,
    marginBottom: 8,
  },
  mediumText: {
    color: '#FFFFFF',
    fontSize: 18,
    opacity: 0.9,
  },
  bigText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  selectedPostContainer: {
    paddingTop: 20,
    paddingBottom: 40,
    borderBottomWidth: 2,
    borderBottomColor: '#93DBF0',
    paddingHorizontal: 10,
  },
  commentInputContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  bigInput: {
    padding: 10,
    minHeight: 80,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#FFFFFF',
    color: '#FFFFFF',
    textAlignVertical: 'top',
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
  buttonTextPrimary: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: '#1FADD7'
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
});

export default styles;