import { $apiClient } from 'app/utils/apiClient';
import deviceStorage from 'app/utils/deviceStorage';

export function postData() {
  return $apiClient.post('/auth/logout');
}

export async function deleteAuthAccessToken() {
  await deviceStorage.removeItem('access_token');
  delete $apiClient.defaults.headers.Authorization;
}
