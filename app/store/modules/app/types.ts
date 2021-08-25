export interface AutoLoginPayload {
  token: string;
}
export interface AppState {
  token: string | null;
  error?: any | null;
}
