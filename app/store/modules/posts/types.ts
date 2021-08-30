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
    add: boolean;
    update: boolean;
  };
}

export interface INewPost {
  id?: number;
  title: string;
  text: string;
  category_id: number;
  priority: number;
}

export type FetchErrorPayload = string | null;
