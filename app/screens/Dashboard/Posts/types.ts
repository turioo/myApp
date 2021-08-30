export type EditTypes = {
  PostsMain: undefined;
  PostsCreate: undefined;
  PostsEdit: {
    id: number;
    name: string;
    text: string;
    category_id: number;
    priority: number;
  };
};
