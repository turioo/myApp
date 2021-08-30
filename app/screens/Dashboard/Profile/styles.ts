import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#20212E',
    width: '100%',
    minHeight: Dimensions.get('window').height - 52,
    display: 'flex',
  },
  background: {
    width: '100%',
    height: '30%',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    zIndex: 1,
  },
  container: {
    marginTop: 100,
    paddingHorizontal: 15,
    zIndex: 3,
    alignItems: 'center',
  },
  logout: {
    position: 'absolute',
    right: 20,
    top: 25,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  info: {
    fontFamily: 'Raleway-Bold',
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
  loader: {
    width: '100%',
    height: Dimensions.get('window').height - 52,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#20212E',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
});

export default styles;
