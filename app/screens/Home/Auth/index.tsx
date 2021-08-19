import React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

type Props = {
  navigation: {
    navigate: (param: string) => void;
    goBack: () => void;
  };
};

const Auth = ({ navigation }: Props): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Wishlist of {'\n'}
          Hexide Digital
        </Text>
        <View style={styles.buttons}>
          <Text
            onPress={() => navigation.navigate('SignIn')}
            style={styles.buttonActive}>
            Sign In
          </Text>
          <Text
            onPress={() => navigation.navigate('SignUp')}
            style={styles.button}>
            Sign Up
          </Text>
        </View>
      </View>
      <LinearGradient
        colors={['transparent', '#ac2121']}
        style={styles.background}
      />
    </View>
  );
};

export default Auth;
