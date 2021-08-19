import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

type Props = {
  text: string;
};

const Input = ({ text }: Props): JSX.Element => {
  return <Text style={styles.title}>{text}</Text>;
};

export default Input;
