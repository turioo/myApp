import { call, put } from 'redux-saga/effects';

import { actions as loginActions } from './slice';
import { actions as appActions } from 'app/store/modules/app/slice';
import * as services from './services';
import { deleteAuthAccessToken, setAuthAccessToken } from '../app/services';

/**
 * Login request/response handler
 */
export function* fetchLoginSaga({
  payload,
}: ReturnType<typeof loginActions.fetchDataTrigger>) {
  try {
    const { accessToken } = yield call(services.postData, payload);
    console.log(accessToken);
    yield put(loginActions.fetchDataSuccess());
    yield put(appActions.autoLoginSetToken({ token: accessToken }));
    yield call(setAuthAccessToken, accessToken);
  } catch (err) {
    yield put(loginActions.fetchDataFailed(err));
    yield call(deleteAuthAccessToken);
  } finally {
    yield put(loginActions.fetchDataFulfilled());
  }
}
