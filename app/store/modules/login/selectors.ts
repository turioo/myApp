import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'app/types/store/rootState';
import { initialState } from './state';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.login || initialState;

export const selectIsLoading = createSelector(
  [selectDomain],
  loginState => loginState.loading,
);

export const selectDone = createSelector(
  [selectDomain],
  loginState => loginState.done,
);

export const selectError = createSelector(
  [selectDomain],
  loginState => loginState.error,
);
