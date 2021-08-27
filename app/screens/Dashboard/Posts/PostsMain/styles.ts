import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#20212E',
    width: '100%',
    height: '100%',
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
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 52,
    zIndex: 3,
  },
  title: {
    fontFamily: 'Raleway-Black',
    fontSize: 35,
    lineHeight: 42,
    color: 'white',
    marginBottom: 25,
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
    marginTop: 15,
  },
  input: {
    fontFamily: 'Raleway-Regular',
    color: '#FFFFFF',
    borderBottomWidth: 2,
    borderBottomColor: '#FBF6F0',
    width: 300,
    marginBottom: 15,
    fontSize: 16,
    height: 45,
  },
});

export default styles;
