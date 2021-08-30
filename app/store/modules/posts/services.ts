import { $apiClient } from 'app/utils/apiClient';
import { INewPost } from 'app/store/modules/posts/types';

export function getPostsData() {
  return $apiClient.get('/posts');
}
export function addPostData(payload: INewPost) {
  return $apiClient.post('/posts', payload);
}
export function deletePostData(payload: number) {
  return $apiClient.delete(`/posts/${payload}`);
}
export function updatePostData(payload: INewPost) {
  return $apiClient.put(`/posts/${payload.id}`, payload);
}
