import { $apiClient } from 'app/utils/apiClient';
import deviceStorage from 'app/utils/deviceStorage';

export async function setAuthAccessToken(token: string) {
  await deviceStorage.saveItem('access_token', token);
  $apiClient.defaults.headers.Authorization = `Bearer ${token}`;
}

export async function deleteAuthAccessToken() {
  await deviceStorage.removeItem('access_token');
  delete $apiClient.defaults.headers.Authorization;
}
