import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import BASE_URL from 'app/utils/data';

const config: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type':
      'application/json;text/html;multipart/form-data;application/x-www-form-urlencoded;charset=utf-8',
  },
};

const $apiClient: AxiosInstance = axios.create(config);

export { $apiClient };
