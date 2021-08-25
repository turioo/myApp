import React from 'react';
import { Text, Button, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { actions as logoutActions } from 'app/store/modules/logout/slice';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>Dashboard</Text>
        <Button
          onPress={() => dispatch(logoutActions.fetchDataTrigger())}
          title="Log out"
        />
      </View>
      <LinearGradient
        colors={['transparent', '#ac2121']}
        style={styles.background}
      />
    </View>
  );
};

export default Dashboard;
