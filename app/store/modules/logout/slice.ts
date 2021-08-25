import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './state';
import { FetchErrorPayload } from './types';

const slice = createSlice({
  name: 'logout',
  initialState,
  reducers: {
    fetchDataTrigger(state) {
      state.loading = true;
      state.done = false;
      state.error = null;
    },
    fetchDataSuccess(state) {
      state.done = true;
    },
    fetchDataFailed(state, action: PayloadAction<FetchErrorPayload>) {
      state.error = action.payload;
    },
    fetchDataFulfilled(state) {
      state.loading = false;
      state.done = false;
    },
  },
});

export const { actions, reducer, name } = slice;
