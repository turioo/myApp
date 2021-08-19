import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#20212E',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
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
  },
  title: {
    fontFamily: 'Raleway-Black',
    fontSize: 35,
    lineHeight: 42,
    textAlign: 'center',
    color: 'white',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  buttonActive: {
    fontFamily: 'Raleway-Bold',
    fontSize: 14,
    color: '#FFFFFF',
    textTransform: 'uppercase',
    backgroundColor: '#BC181E',
    height: 35,
    width: 130,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginRight: 15,
  },
  button: {
    fontFamily: 'Raleway-Bold',
    fontSize: 14,
    color: '#FFFFFF',
    textTransform: 'uppercase',
    height: 35,
    width: 130,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
});

export default styles;
