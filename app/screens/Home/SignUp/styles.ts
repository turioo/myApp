import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#20212E',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
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
    paddingHorizontal: 15,
    zIndex: 3,
    alignItems: 'center',
  },
  photo: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: '#40445F',
    position: 'relative',
    overflow: 'hidden'
  },
  photoicon: {
    position: 'absolute',
    left: '33%',
    top: '35%',
    zIndex: 10,
  },
  blur: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#2A2A2A',
    zIndex: 9,
    opacity: 0.5,
  },
  loader: {
    width: '100%',
    height: Dimensions.get('window').height,
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
