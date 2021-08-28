export interface IPost {
  category: {
    id: number;
    title: number;
  };
  createdAt: {
    date: string;
    time: string;
  };
  id: number;
  lastChangeUser?: {
    email: string;
    id: number;
    name: string;
    photo: string;
    status: number;
  };
  name: string;
  priority: number;
  status: number;
  text: string;
  updatedAt: {
    date: string;
    time: string;
  };
  user?: {
    email: string;
    id: number;
    name: string;
    photo: string;
    status: number;
  };
}

export interface PostsState {
  data: Array<IPost> | null;
  fetch: {
    loading: boolean;
    done: boolean;
    error: string | null;
  };
}

export type FetchErrorPayload = string | null;
