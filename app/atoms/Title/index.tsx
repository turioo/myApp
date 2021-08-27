import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

type Props = {
  text: string;
};

const Title = ({ text }: Props): JSX.Element => {
  return <Text style={styles.title}>{text}</Text>;
};

export default Title;
