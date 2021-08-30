import { call, put } from 'redux-saga/effects';

import { actions as postsActions } from './slice';
import {
  addPostData,
  deletePostData,
  getPostsData,
  updatePostData,
} from './services';
import { IPost } from 'app/store/modules/posts/types';
import Toast from 'react-native-toast-message';

export function* fetchPostsSaga() {
  try {
    const data: Array<IPost> = yield call(getPostsData);
    yield put(postsActions.fetchDataSuccess(data));
  } catch (err) {
    yield put(postsActions.fetchDataFailed(err));
  } finally {
    yield put(postsActions.fetchDataFulfilled());
  }
}
export function* addPostSaga({
  payload,
}: ReturnType<typeof postsActions.addPostDataTrigger>) {
  try {
    const post: IPost = yield call(addPostData, payload);
    yield put(postsActions.addPostDataSuccess(post));
  } catch (err) {
    yield put(postsActions.fetchDataFailed(err));
  } finally {
    yield put(postsActions.addPostDataFulfilled());
  }
}

export function* deletePostSaga({
  payload,
}: ReturnType<typeof postsActions.deletePostDataTrigger>) {
  try {
    yield call(deletePostData, payload);
    yield put(postsActions.deletePostDataSuccess(payload));
    yield Toast.show({
      type: 'success',
      text1: 'Succes',
      position: 'bottom',
      visibilityTime: 4000,
      autoHide: true,
    });
  } catch (err) {
    yield put(postsActions.fetchDataFailed(err));
  } finally {
    yield put(postsActions.fetchDataFulfilled());
  }
}

export function* updatePostSaga({
  payload,
}: ReturnType<typeof postsActions.updatePostDataTrigger>) {
  try {
    yield console.log('fsdfd');
    const post: IPost = yield call(updatePostData, payload);
    yield put(postsActions.updatePostDataSuccess(post));
  } catch (err) {
    yield put(postsActions.fetchDataFailed(err));
  } finally {
    yield put(postsActions.updatePostDataFulfilled());
  }
}
