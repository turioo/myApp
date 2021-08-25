import { AppState } from 'app/store/modules/app/types';
import { LoginState } from 'app/store/modules/login/types';
import { LogoutState } from 'app/store/modules/logout/types';

export interface RootState {
  app: AppState;
  login: LoginState;
  logout: LogoutState;
}
