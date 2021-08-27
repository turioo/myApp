export interface IProfile {
  email: string;
  id: number;
  name: string;
  photo: string;
  status: number;
}

export interface ProfileState {
  data: IProfile | null;
  fetch: {
    loading: boolean;
    done: boolean;
    error: string | null;
  };
}

export type FetchErrorPayload = string | null;
