export interface FetchTriggerPayload {
  email: string;
  password: string;
}

export interface LoginState {
  loading: boolean;
  done: boolean;
  error?: string | null;
}

export type FetchErrorPayload = string | null;
