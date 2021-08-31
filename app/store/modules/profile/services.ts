import { $apiClient } from 'app/utils/apiClient';
import { IUpdateProfile } from 'app/store/modules/profile/types';

export function getData() {
  return $apiClient.get('/auth/me?');
}
export function updateData(payload: IUpdateProfile) {
  return $apiClient.post('/auth/users', payload);
}
