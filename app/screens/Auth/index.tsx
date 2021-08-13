import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Auth: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Wishlist of {'\n'}
          Hexide Digital
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#20212E',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    fontSize: 35,
    lineHeight: 42,
    textAlign: 'center',
    color: 'white',
  },
});

export default Auth;
