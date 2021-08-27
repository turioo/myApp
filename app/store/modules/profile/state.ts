import { ProfileState } from './types';

export const initialState: ProfileState = {
  data: null,
  fetch: {
    loading: false,
    done: false,
    error: null,
  },
};
