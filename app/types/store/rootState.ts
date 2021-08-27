import { AppState } from 'app/store/modules/app/types';
import { LoginState } from 'app/store/modules/login/types';
import { LogoutState } from 'app/store/modules/logout/types';
import { ProfileState } from 'app/store/modules/profile/types';
import { PostsState } from 'app/store/modules/posts/types';

export interface RootState {
  app: AppState;
  login: LoginState;
  logout: LogoutState;
  profile: ProfileState;
  posts: PostsState;
}
