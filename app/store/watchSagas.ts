import { takeLatest } from '@redux-saga/core/effects';

import { actions as loginActions } from '../store/modules/login/slice';
import { fetchLoginSaga } from '../store/modules/login/saga';

import { actions as logoutActions } from '../store/modules/logout/slice';
import { fetchLogoutSaga } from '../store/modules/logout/saga';

export function* watchSagas() {
  yield takeLatest(loginActions.fetchDataTrigger.type, fetchLoginSaga);
  yield takeLatest(logoutActions.fetchDataTrigger.type, fetchLogoutSaga);
}
