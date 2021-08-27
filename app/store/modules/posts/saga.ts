import { call, put } from 'redux-saga/effects';

import { actions as postsActions } from './slice';
import { getPostsData } from './services';
import { IPost } from 'app/store/modules/posts/types';

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
