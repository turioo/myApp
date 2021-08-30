import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './state';
import { FetchErrorPayload, IPost } from './types';

const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchDataTrigger(state) {
      state.data = null;
      state.fetch.add = false;
      state.fetch.loading = true;
      state.fetch.done = false;
      state.fetch.error = null;
    },
    fetchDataSuccess(state, action: PayloadAction<Array<IPost>>) {
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
    addPostDataTrigger(state, _action) {
      state.fetch.done = false;
      state.fetch.error = null;
    },
    addPostDataSuccess(state, action) {
      state.data = state.data?.concat(action.payload) || state.data;
      state.fetch.add = true;
    },
    addPostDataFulfilled(state) {
      state.fetch.add = false;
      state.fetch.loading = false;
      state.fetch.done = false;
    },
    deletePostDataTrigger(state, _action) {
      state.fetch.done = false;
      state.fetch.error = null;
    },
    deletePostDataSuccess(state, action) {
      state.data =
        state.data?.filter(function (e) {
          return e.id !== action.payload;
        }) || state.data;
    },
    updatePostDataTrigger(state, _action) {
      state.fetch.done = false;
      state.fetch.error = null;
    },
    updatePostDataSuccess(state, action) {
      state.fetch.update = true;
      state.data =
        state.data
          ?.filter(function (e) {
            return e.id !== action.payload.id;
          })
          .concat(action.payload) || state.data;
    },
    updatePostDataFulfilled(state) {
      state.fetch.update = false;
      state.fetch.loading = false;
      state.fetch.done = false;
    },
  },
});

export const { actions, reducer, name } = slice;
