import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './state';
import { FetchErrorPayload, IProfile } from './types';

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    fetchDataTrigger(state) {
      state.data = null;
      state.fetch.loading = true;
      state.fetch.done = false;
      state.fetch.error = null;
    },
    fetchDataSuccess(state, action: PayloadAction<IProfile>) {
      state.fetch.done = true;
      state.data = action.payload;
    },
    fetchDataFailed(state, action: PayloadAction<FetchErrorPayload>) {
      state.fetch.error = action.payload;
    },
    fetchDataFulfilled(state) {
      state.fetch.loading = false;
      state.fetch.done = false;
    },
    updateDataTrigger(state, _action) {
      state.data = null;
      state.fetch.loading = true;
      state.fetch.done = false;
      state.fetch.error = null;
    },
    updateDataSuccess(state, action: PayloadAction<IProfile>) {
      state.fetch.done = true;
      state.data = action.payload;
    },
    updateDataFailed(state, action: PayloadAction<FetchErrorPayload>) {
      state.fetch.error = action.payload;
    },
    updateDataFulfilled(state) {
      state.fetch.loading = false;
      state.fetch.done = false;
    },
  },
});

export const { actions, reducer, name } = slice;
