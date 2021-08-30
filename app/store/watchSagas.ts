import { takeLatest } from '@redux-saga/core/effects';

import { actions as loginActions } from '../store/modules/login/slice';
import { fetchLoginSaga } from '../store/modules/login/saga';

import { actions as logoutActions } from '../store/modules/logout/slice';
import { fetchLogoutSaga } from '../store/modules/logout/saga';

import { actions as profileActions } from '../store/modules/profile/slice';
import { fetchProfileSaga } from '../store/modules/profile/saga';

import { actions as postsActions } from '../store/modules/posts/slice';
import {
  addPostSaga,
  deletePostSaga,
  fetchPostsSaga,
  updatePostSaga,
} from '../store/modules/posts/saga';

export function* watchSagas() {
  yield takeLatest(loginActions.fetchDataTrigger.type, fetchLoginSaga);
  yield takeLatest(logoutActions.fetchDataTrigger.type, fetchLogoutSaga);
  yield takeLatest(profileActions.fetchDataTrigger.type, fetchProfileSaga);
  yield takeLatest(postsActions.fetchDataTrigger.type, fetchPostsSaga);
  yield takeLatest(postsActions.addPostDataTrigger.type, addPostSaga);
  yield takeLatest(postsActions.deletePostDataTrigger.type, deletePostSaga);
  yield takeLatest(postsActions.updatePostDataTrigger.type, updatePostSaga);
}
