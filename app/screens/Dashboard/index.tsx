import React from 'react';
import { Text, TextInput, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const Dashboard: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>Dashboard</Text>
      </View>
      <LinearGradient
        colors={['transparent', '#ac2121']}
        style={styles.background}
      />
    </View>
  );
};

export default Dashboard;
