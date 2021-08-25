import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DeviceInfo from 'react-native-device-info';
import snakeCaseKeys from 'snakecase-keys';
import camelCaseKeys from 'camelcase-keys';
import {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';

// import { actions as logoutActions } from 'app/store/modules/logout/slice';
// import { actions as refreshTokenActions } from 'app/store/modules/refreshToken/slice';

import deviceStorage from 'app/utils/deviceStorage';

const useHttpClient = (
  httpClientInstance: AxiosInstance,
): [string | null, () => void] => {
  // local error state
  const [error, setError] = useState<string | null>(null);

  // actions
  // const dispatch = useDispatch();
  // const onLogout = () => dispatch(logoutActions.fetchDataTrigger());

  // request interceptor
  const reqInterceptor = httpClientInstance.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
      setError(null);

      console.log(
        '++++++++++++++++++++++++++++++++++++++++++++' + JSON.stringify(config),
      );
      // formatting data
      if (config.data) {
        config.data =
          config.data instanceof FormData
            ? config.data
            : snakeCaseKeys(config.data, { deep: true });
      }

      // formatting headers
      const accessToken = await deviceStorage.getItem('accessToken');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      // additional header configuration
      const appVersion = DeviceInfo.getVersion();
      const deviceName = await DeviceInfo.getDeviceName().then(
        (deviceName: string) => deviceName,
      );
      const deviceVersion = DeviceInfo.getSystemVersion();
      const deviceId = DeviceInfo.getUniqueId();

      config.headers['Accept-Platform-Version'] = appVersion;
      config.headers['Accept-Platform-Device-Name'] = deviceName;
      config.headers['Accept-Platform-Device-Version'] = deviceVersion;
      config.headers['Accept-Platform-Device-Id'] = deviceId;

      return config;
    },
    (err: any) => {
      setError(err);
      return Promise.reject(err);
    },
  );

  // response interceptor
  const resInterceptor = httpClientInstance.interceptors.response.use(
    (res: AxiosResponse) => {
      console.log(
        '---------------------------------' + JSON.stringify(res.data),
      );
      return camelCaseKeys(res.data.data, { deep: true });
    },
    async (err: AxiosError) => {
      let formattedMessage: string | null = null;

      if (err?.response) {
        // errors handling
        switch (err.response.status) {
          case 401:
            // dispatch(refreshTokenActions.fetchDataTrigger());
            // try {
            //   dispatch(refreshTokenActions.fetchDataTrigger());
            // } catch {
            //   onLogout();
            // }

            break;

          case 500:
            formattedMessage = 'Unknown error';

            break;

          default:
            break;
        }

        if (err.response.data?.message) {
          formattedMessage = err.response.data.message;
        }

        if (err.response.data?.errors) {
          Object.keys(err.response.data.errors).forEach(errorKey => {
            // @ts-ignore
            err.response.data.errors[errorKey].forEach((line: string) => {
              formattedMessage += `\r\n${line}`;
            });
          });
        }

        if (err.response.status !== 401) {
          setError(formattedMessage);
        }
      }

      return Promise.reject(err);
    },
  );

  // watch reqInterceptor & resInterceptor - eject request & response interceptors
  useEffect(
    () => () => {
      httpClientInstance.interceptors.request.eject(reqInterceptor);
      httpClientInstance.interceptors.response.eject(resInterceptor);
    },
    [
      reqInterceptor,
      resInterceptor,
      httpClientInstance.interceptors.request,
      httpClientInstance.interceptors.response,
    ],
  );

  const errorClearedHandler = () => {
    setError(null);
  };

  return [error, errorClearedHandler];
};

export default useHttpClient;
