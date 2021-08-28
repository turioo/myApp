import { call, put } from 'redux-saga/effects';

import { actions as profileActions } from './slice';
import { getData } from './services';
import { IProfile } from 'app/store/modules/profile/types';

/**
 * Login request/response handler
 */
export function* fetchProfileSaga() {
  try {
    const data: IProfile = yield call(getData);
    yield put(profileActions.fetchDataSuccess(data));
  } catch (err) {
    yield put(profileActions.fetchDataFailed(err));
  } finally {
    yield put(profileActions.fetchDataFulfilled());
  }
}
