import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';

interface IState {
  loginReducer: ILoginState;
}

const Login: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.login}>Login Status : {id}</Text>
      </View>
    </View>
  );
};

export default Login;
