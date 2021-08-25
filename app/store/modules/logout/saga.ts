import { call, put } from 'redux-saga/effects';

import { actions as logoutActions } from './slice';
import { actions as appActions } from 'app/store/modules/app/slice';
import * as services from './services';

/**
 * Logout request/response handler
 */
export function* fetchLogoutSaga() {
  try {
    // yield call(services.postData);

    yield put(logoutActions.fetchDataSuccess());
  } catch (err) {
    yield put(logoutActions.fetchDataFailed(err));
  } finally {
    yield put(logoutActions.fetchDataFulfilled());

    yield call(services.deleteAuthAccessToken);
    yield put(appActions.autoLoginRestrictToken());
  }
}
