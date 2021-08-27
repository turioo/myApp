import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrap: {
    marginVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  title: {
    display: 'flex',
    fontFamily: 'Raleway-Black',
    fontSize: 24,
    lineHeight: 24,
    color: 'white',
  },
  date: {
    fontFamily: 'Raleway-Regular',
    fontSize: 15,
    lineHeight: 15,
    color: 'white',
  },
  left: {
    marginRight: 10,
  },
  right: {
    marginBottom: 3,
  },
});

export default styles;
