import React, { useEffect } from 'react';
import { AxiosInstance } from 'axios';

import httpClient from 'app/hooks/httpClient';
import { Theme } from '@react-navigation/native';

// @ts-ignore
import Toast from 'react-native-toast-message';

interface IProps {
  theme: Theme;
}

const withError =
  (WrappedComponent: React.FC<IProps>, $axiosInstance: AxiosInstance) =>
  (props: any) => {
    const [error, clearError] = httpClient($axiosInstance);

    useEffect(() => {
      if (error) {
        emitToast(error);
        clearError();
      }
    }, [error]);

    const emitToast = (message: string) => {
      if (message) {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Something went wrong',
          text2: message,
          visibilityTime: 4000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
          onShow: () => {},
          onHide: () => {},
        });
      }
    };

    return <WrappedComponent {...props} />;
  };

export default withError;
