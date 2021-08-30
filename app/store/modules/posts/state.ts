import { PostsState } from './types';

export const initialState: PostsState = {
  data: null,
  fetch: {
    loading: false,
    done: false,
    error: null,
    add: false,
    update: false,
  },
};
