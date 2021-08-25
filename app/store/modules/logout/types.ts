/**
 * Logout State
 */
export interface LogoutState {
  loading: boolean;
  done: boolean;
  error?: string | null;
}

export type FetchErrorPayload = string | null;
