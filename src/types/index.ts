export type User = {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
};

export type CreateUserInputs = {
  name: string;
  email: string;
};
