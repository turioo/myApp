import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

type Props = {
  value: string;
  placeholder: string;
  security: boolean;
  onBlur: () => void;
  onChangeText: () => void;
};

const Input = ({
  value,
  onBlur,
  onChangeText,
  security,
  placeholder,
}: Props): JSX.Element => {
  return (
    <TextInput
      style={styles.input}
      onBlur={onBlur}
      onChangeText={onChangeText}
      value={value}
      secureTextEntry={security}
      placeholder={placeholder}
      placeholderTextColor="#FFFFFF"
    />
  );
};

export default Input;
