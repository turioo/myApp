import React from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Header from '../../../features/Header';
import Input from '../../../atoms/Input';
import Title from '../../../atoms/Title';
import Button from '../../../atoms/Button';

import { useForm, Controller } from 'react-hook-form';
import ValidationError from '../../../atoms/ValidationError';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'app/store/modules/login/slice';
import { selectIsLoading } from 'app/store/modules/login/selectors';

type Props = {
  navigation: {
    navigate: (param: string) => void;
    goBack: () => void;
  };
};
type FormData = {
  email: string;
  password: string;
};
const SignIn = ({ navigation }: Props): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data: FormData) => {
    dispatch(actions.fetchDataTrigger(data));
  };
  const isFetching = useSelector(selectIsLoading);
  return (
    <View style={styles.wrapper}>
      {isFetching && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#BC181E" />
        </View>
      )}
      <Header navigation={navigation} />
      <View style={styles.container}>
        <Title text="Sign In" />
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /\S+@\S+\.\S+/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
              security={false}
            />
          )}
          name="email"
          defaultValue=""
        />
        {errors.email?.type === 'required' && (
          <ValidationError message={'This field is required'} />
        )}
        {errors.email?.type === 'pattern' && (
          <ValidationError message={'Enter correct format'} />
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Password"
              security={true}
            />
          )}
          name="password"
          defaultValue=""
        />
        {errors.password?.type === 'required' && (
          <ValidationError message={'This field is required'} />
        )}

        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <Button title={'Sign In'} />
        </TouchableOpacity>
      </View>
      <LinearGradient
        colors={['transparent', '#ac2121']}
        style={styles.background}
      />
    </View>
  );
};

export default SignIn;
