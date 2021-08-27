import { call, put } from 'redux-saga/effects';

import { actions as loginActions } from './slice';
import { actions as appActions } from 'app/store/modules/app/slice';
import * as services from './services';
import { setAuthAccessToken } from '../app/services';
import Toast from 'react-native-toast-message';
/**
 * Login request/response handler
 */
export function* fetchLoginSaga({
  payload,
}: ReturnType<typeof loginActions.fetchDataTrigger>) {
  try {
    const { accessToken } = yield call(services.postData, payload);
    yield put(loginActions.fetchDataSuccess());
    yield put(appActions.autoLoginSetToken({ token: accessToken }));
    yield call(setAuthAccessToken, accessToken);
  } catch (err) {
    yield put(loginActions.fetchDataFailed(err));
    Toast.show({
      type: 'error',
      position: 'bottom',
      text1: 'Wrong email or password',
      visibilityTime: 4000,
      autoHide: true,
    });
  } finally {
    yield put(loginActions.fetchDataFulfilled());
  }
}
