import { call, put } from 'redux-saga/effects';

import { actions as profileActions } from './slice';
import { getData, updateData } from './services';
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

export function* updateProfileSaga({
  payload,
}: ReturnType<typeof profileActions.updateDataTrigger>) {
  try {
    const data: IProfile = yield call(updateData, payload);
    yield put(profileActions.updateDataSuccess(data));
  } catch (err) {
    yield put(profileActions.updateDataFailed(err));
  } finally {
    yield put(profileActions.updateDataFulfilled());
  }
}
