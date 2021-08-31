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
export interface IUpdateProfile {
  email: string;
  name: string;
  photo: string;
}

export type FetchErrorPayload = string | null;
