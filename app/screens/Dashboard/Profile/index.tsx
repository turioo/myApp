import React, { useEffect } from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { actions as profileActions } from 'app/store/modules/profile/slice';
import { actions as logoutActions } from 'app/store/modules/logout/slice';
import Button from 'app/atoms/Button/index';
import Svg, { Path } from 'react-native-svg';
import { getData } from 'app/store/modules/profile/selectors';

const Profile: React.FC = () => {
  function SvgLogout() {
    return (
      <Svg width={25} height={25} viewBox="0 0 385 385" fill="none">
        <Path
          d="M24.061 360.91H180.455C187.095 360.91 192.485 366.299 192.484 372.94C192.484 379.58 187.095 384.97 180.454 384.97H12.03C5.39 384.97 0 379.581 0 372.94V12.031C0 5.38998 5.39 0.000976562 12.03 0.000976562H180.455C187.095 0.000976562 192.485 5.39098 192.485 12.031C192.485 18.671 187.096 24.061 180.455 24.061H24.061V360.91ZM298.472 99.8879L381.481 184.088C386.161 188.756 386.113 196.588 381.469 201.268L298.472 285.468C293.78 290.22 286.165 290.22 281.461 285.468C276.757 280.728 276.757 273.041 281.461 268.289L344.019 204.829H96.279C89.639 204.829 84.249 199.391 84.249 192.678C84.249 185.965 89.638 180.527 96.279 180.527H344.019L281.461 117.067C276.757 112.327 276.757 104.628 281.461 99.8879C286.153 95.1479 293.768 95.1359 298.472 99.8879Z"
          fill="white"
        />
      </Svg>
    );
  }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileActions.fetchDataTrigger());
  }, [dispatch]);

  const data = useSelector(getData);
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.logout}
        onPress={() => dispatch(logoutActions.fetchDataTrigger())}>
        <SvgLogout />
      </TouchableOpacity>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: data ? data.photo : '' }} />
        <Button title="Edit" />
        <Text style={styles.info}>Name: {data?.name}</Text>
        <Text style={styles.info}>Email: {data?.email}</Text>
      </View>
      <LinearGradient
        colors={['transparent', '#ac2121']}
        style={styles.background}
      />
    </View>
  );
};

export default Profile;
