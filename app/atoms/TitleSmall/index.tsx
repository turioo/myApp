import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

type Props = {
  text: string;
  date?: string;
};

const TitleSmall = ({ text, date }: Props): JSX.Element => {
  return (
    <View style={styles.wrap}>
      <View style={styles.left}>
        <Text style={styles.title}>{text}</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

export default TitleSmall;
