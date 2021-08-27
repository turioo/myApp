import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'app/types/store/rootState';
import { initialState } from './state';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.profile || initialState;

export const getData = createSelector(
  [selectDomain],
  profileState => profileState.data,
);

export const selectIsLoading = createSelector(
  [selectDomain],
  profileState => profileState.fetch.loading,
);

export const selectDone = createSelector(
  [selectDomain],
  profileState => profileState.fetch.done,
);

export const selectError = createSelector(
  [selectDomain],
  profileState => profileState.fetch.error,
);
