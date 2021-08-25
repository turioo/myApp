import { reducer as app } from './modules/app/slice';
import { reducer as login } from './modules/login/slice';
import { reducer as logout } from './modules/logout/slice';

export default {
  app,
  login,
  logout,
};
