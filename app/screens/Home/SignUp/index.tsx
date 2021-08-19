import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Header from '../../../features/Header';
import Input from '../../../atoms/Input';
import Title from '../../../atoms/Title';
import Button from '../../../atoms/Button';

import { useForm, Controller } from 'react-hook-form';
import ValidationError from '../../../atoms/ValidationError';

type Props = {
  navigation: {
    navigate: (param: string) => void;
    goBack: () => void;
  };
};
type FormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};
const SignUp = ({ navigation }: Props): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [equal, setEqual] = useState<boolean>(true);

  const onSubmit = (data: FormData) => {
    data.password === data.password_confirmation
      ? console.log(data)
      : setEqual(false);
  };
  return (
    <View style={styles.wrapper}>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <Title text="Sign Up" />
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
              placeholder="Name"
              security={false}
            />
          )}
          name="name"
          defaultValue=""
        />
        {errors.name && <ValidationError message={'This field is required'} />}
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
            minLength: 8,
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
        {errors.password?.type === 'minLength' && (
          <ValidationError message={'Minimal length 8 characters'} />
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
              placeholder="Repeat password"
              security={true}
            />
          )}
          name="password_confirmation"
          defaultValue=""
        />
        {errors.password_confirmation?.type === 'required' && (
          <ValidationError message={'This field is required'} />
        )}
        {!equal && (
          <ValidationError message={'This field is not equal to password'} />
        )}

        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <Button title={'Sign Up'} />
        </TouchableOpacity>
      </View>
      <LinearGradient
        colors={['transparent', '#ac2121']}
        style={styles.background}
      />
    </View>
  );
};

export default SignUp;
