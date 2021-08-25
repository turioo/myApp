import { call, put } from 'redux-saga/effects';
import deviceStorage from 'app/utils/deviceStorage';
import jwtDecode from 'jwt-decode';

import { setAuthAccessToken } from './services';
import { actions as appActions } from './slice';

// auth check state
export function* autoLoginSaga() {
  const token: string | null = yield call(
    deviceStorage.getItem,
    'access_token',
  );

  if (token) {
    const decodedInfo = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    // @ts-ignore
    if (decodedInfo?.exp > currentTime) {
      yield call(setAuthAccessToken, token);
      yield put(appActions.autoLoginSetToken({ token }));
    } else {
    }
  } else {
    yield put(appActions.autoLoginRestrictToken());
  }
}
