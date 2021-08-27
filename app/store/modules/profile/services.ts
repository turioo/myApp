import { $apiClient } from 'app/utils/apiClient';

export function getData() {
  return $apiClient.get('/auth/me?');
}
