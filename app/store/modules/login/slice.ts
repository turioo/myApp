import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './state';
import { FetchErrorPayload, FetchTriggerPayload } from './types';

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    fetchDataTrigger(state, _action: PayloadAction<FetchTriggerPayload>) {
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
