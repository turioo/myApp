import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

type Props = {
  title: string;
};

const Button = ({ title }: Props): JSX.Element => {
  return <Text style={styles.button}>{title}</Text>;
};

export default Button;
