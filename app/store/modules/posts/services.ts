import { $apiClient } from 'app/utils/apiClient';

export function getPostsData() {
  return $apiClient.get('/posts');
}
