import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'app/types/store/rootState';
import { initialState } from './state';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.app || initialState;

export const selectIsAuthenticated = createSelector(
  [selectDomain],
  appState => appState.token,
);

export const selectError = createSelector(
  [selectDomain],
  appState => appState.error,
);
