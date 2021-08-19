import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Svg, { Path } from 'react-native-svg';

type Props = {
  message: string;
};

function SvgComponent() {
  return (
    <Svg width={13} height={13} viewBox="0 0 16 16">
      <Path
        d="M8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16C12.411 16 16 12.411 16 8C16 3.589 12.411 0 8 0ZM8 15C4.14 15 1 11.86 1 8C1 4.14 4.14 1 8 1C11.86 1 15 4.14 15 8C15 11.86 11.86 15 8 15Z"
        fill="#BC181E"
      />
      <Path d="M8.5 3.5H7.5V10.5H8.5V3.5Z" fill="#BC181E" />
      <Path d="M8.5 11.5H7.5V12.5H8.5V11.5Z" fill="#BC181E" />
    </Svg>
  );
}

const ValidationError = ({ message }: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <SvgComponent />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default ValidationError;
