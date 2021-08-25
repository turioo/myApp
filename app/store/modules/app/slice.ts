import { initialState } from './state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AutoLoginPayload } from './types';

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    autoLoginTrigger(state) {
      state.error = null;
    },
    autoLoginSetToken(state, action: PayloadAction<AutoLoginPayload>) {
      state.token = action.payload.token;
    },
    autoLoginRestrictToken(state) {
      console.log('before token null');
      state.token = null;
    },
  },
});

export const { actions, reducer, name } = appSlice;
