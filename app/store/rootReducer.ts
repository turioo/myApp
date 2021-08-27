import { reducer as app } from './modules/app/slice';
import { reducer as login } from './modules/login/slice';
import { reducer as logout } from './modules/logout/slice';
import { reducer as profile } from './modules/profile/slice';
import { reducer as posts } from './modules/posts/slice';

export default {
  app,
  login,
  logout,
  profile,
  posts,
};
