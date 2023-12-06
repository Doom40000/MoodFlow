import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  commentContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#93DBF0',
  },
  commentProfile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  profileIcon: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: '#FFD8BE',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIconText: {
    color: '#FFFFFF',
    fontSize: 16,
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
    fontSize: 16,
  },
});

export default styles;