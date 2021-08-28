import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

type Props = {
  value: string;
  placeholder: string;
  multiline?: boolean;
  security: boolean;
  onBlur: () => void;
  onChangeText: () => void;
};

const Input = ({
  value,
  multiline,
  onBlur,
  onChangeText,
  security,
  placeholder,
}: Props): JSX.Element => {
  return (
    <TextInput
      style={styles.input}
      onBlur={onBlur}
      multiline={multiline}
      onChangeText={onChangeText}
      value={value}
      secureTextEntry={security}
      placeholder={placeholder}
      placeholderTextColor="#FFFFFF"
    />
  );
};

export default Input;
