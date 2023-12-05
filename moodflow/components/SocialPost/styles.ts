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
  topSection: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    marginBottom: 12
  },
  likesContainer: {
    marginLeft: 'auto',
    display: 'flex',
    gap: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    padding: 8,
    borderWidth: 1,
    borderColor: '#93DBF0',
    borderRadius: 90
  },
  bigText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '400'
  },
  mediumText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400'
  },
  smallText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500'
  },
  commentsContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  }
});

export default styles;