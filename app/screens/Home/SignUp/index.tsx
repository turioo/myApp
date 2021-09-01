import React, { useState } from 'react';
import { View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Header from '../../../features/Header';
import Input from '../../../atoms/Input';
import Title from '../../../atoms/Title';
import Button from '../../../atoms/Button';
import { useForm, Controller } from 'react-hook-form';
import ValidationError from '../../../atoms/ValidationError';
import { actions } from 'app/store/modules/login/slice';
import { useDispatch, useSelector } from 'react-redux';
import { launchImageLibrary } from 'react-native-image-picker';
import Svg, { Path } from 'react-native-svg';
import { selectIsLoading } from 'app/store/modules/login/selectors';

type Props = {
  navigation: {
    navigate: (param: string) => void;
    goBack: () => void;
  };
};
type FormData = {
  photo: object | null;
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};
const SignUp = ({ navigation }: Props): JSX.Element => {
  function SvgCamera() {
    return (
      <Svg width="25" height="20" viewBox="0 0 25 20">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.1683 3.06559C23.6692 2.54278 22.98 2.23384 22.1958 2.23384H18.251V2.18631C18.251 1.59221 18.0133 1.02186 17.6093 0.641635C17.2053 0.237643 16.6587 0 16.0646 0H8.93536C8.31749 0 7.77091 0.237643 7.36692 0.641635C6.96293 1.04563 6.72529 1.59221 6.72529 2.18631V2.23384H2.80418C2.01996 2.23384 1.3308 2.54278 0.831749 3.06559C0.3327 3.56464 0 4.27757 0 5.03802V16.8726C0 17.6568 0.308935 18.346 0.831749 18.8451C1.3308 19.3441 2.04373 19.6768 2.80418 19.6768H22.1958C22.98 19.6768 23.6692 19.3679 24.1683 18.8451C24.6673 18.346 25 17.6331 25 16.8726V5.03802C25 4.2538 24.6911 3.56464 24.1683 3.06559ZM23.7643 16.8726H23.7405C23.7405 17.3004 23.5741 17.6806 23.289 17.9658C23.0038 18.251 22.6236 18.4173 22.1958 18.4173H2.80418C2.37643 18.4173 1.9962 18.251 1.71103 17.9658C1.42586 17.6806 1.25951 17.3004 1.25951 16.8726V5.03802C1.25951 4.61027 1.42586 4.23004 1.71103 3.94487C1.9962 3.6597 2.37643 3.49335 2.80418 3.49335H7.39068C7.74715 3.49335 8.03232 3.20818 8.03232 2.85171V2.16255C8.03232 1.90114 8.12738 1.6635 8.29373 1.49715C8.46008 1.3308 8.69772 1.23574 8.95913 1.23574H16.0646C16.326 1.23574 16.5637 1.3308 16.73 1.49715C16.8964 1.6635 16.9914 1.90114 16.9914 2.16255V2.85171C16.9914 3.20818 17.2766 3.49335 17.6331 3.49335H22.2196C22.6473 3.49335 23.0276 3.6597 23.3127 3.94487C23.5979 4.23004 23.7643 4.61027 23.7643 5.03802V16.8726ZM12.5003 5.10931C10.8843 5.10931 9.41095 5.77471 8.36532 6.82034C7.29593 7.88973 6.6543 9.33935 6.6543 10.9553C6.6543 12.5713 7.3197 14.0447 8.36532 15.0903C9.43472 16.1597 10.8843 16.8013 12.5003 16.8013C14.1163 16.8013 15.5897 16.1359 16.6353 15.0903C17.7047 14.0209 18.3463 12.5713 18.3463 10.9553C18.3463 9.33935 17.6809 7.86597 16.6353 6.82034C15.5897 5.77471 14.1163 5.10931 12.5003 5.10931ZM15.7322 14.211C14.9005 15.019 13.7598 15.5418 12.5003 15.5418C11.2408 15.5418 10.1001 15.019 9.26837 14.211C8.43662 13.3793 7.93757 12.2386 7.93757 10.9791C7.93757 9.71958 8.46038 8.57889 9.26837 7.74715C10.1001 6.9154 11.2408 6.41635 12.5003 6.41635C13.7598 6.41635 14.9005 6.93916 15.7322 7.74715C16.564 8.57889 17.063 9.71958 17.063 10.9791C17.0868 12.2386 16.564 13.3793 15.7322 14.211ZM22.1258 6.24999C22.1258 6.8931 21.6044 7.41444 20.9613 7.41444C20.3182 7.41444 19.7969 6.8931 19.7969 6.24999C19.7969 5.60688 20.3182 5.08554 20.9613 5.08554C21.6044 5.08554 22.1258 5.60688 22.1258 6.24999Z"
          fill="white"
        />
      </Svg>
    );
  }
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [equal, setEqual] = useState<boolean>(true);
  const dispatch = useDispatch();
  const onSubmit = (data: FormData) => {
    // @ts-ignore
    data.photo = photo.assets[0].base64;
    data.password === data.password_confirmation
      ? dispatch(actions.fetchRegDataTrigger(data))
      : // ?
        setEqual(false);
  };
  const [photo, setPhoto] = React.useState(null);
  var ImagePicker = require('react-native-image-picker');
  const handleChoosePhoto = () => {
    ImagePicker.launchImageLibrary(
      { noData: true, includeBase64: true },
      // @ts-ignore
      response => {
        if (response) {
          setPhoto(response);
        }
      },
    );
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
        <Title text="Sign Up" />
        <TouchableOpacity onPress={handleChoosePhoto}>
          <View style={styles.photo}>
            <View style={styles.photoicon}>
              <SvgCamera />
            </View>
            <View style={styles.blur} />
            <Image
              style={styles.photo}
              // @ts-ignore
              source={{ uri: `${photo?.assets[0].uri}` }}
            />
          </View>
        </TouchableOpacity>
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
