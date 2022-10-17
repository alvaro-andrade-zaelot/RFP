import { useQuery } from '@tanstack/react-query';

/** Types */
import { User } from '../types';

const getUsers = async () => {
  const response = await fetch('https://reqres.in/api/users/');

  const json = await response.json();

  return json.data;
};

export const useGetUsers = () => useQuery<User[], boolean>(['users'], getUsers);
