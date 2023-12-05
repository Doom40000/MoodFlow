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
  bigInput: {
    padding: 10,
    minHeight: 80,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#FFFFFF',
    color: '#FFFFFF',
    textAlignVertical: 'top',
  },
});

export default styles;