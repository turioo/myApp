import { $apiClient } from 'app/utils/apiClient';
import { FetchTriggerPayload } from './types';

export function postData(payload: FetchTriggerPayload) {
  return $apiClient.post('/auth/login', payload);
}
export function postRegData(payload: FetchTriggerPayload) {
  return $apiClient.post('/auth/register?', payload);
}
