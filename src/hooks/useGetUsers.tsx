import { useQuery } from '@tanstack/react-query';

/** Types */
import { User } from '../types';

const getUsers = async (page?: number) => {
  const pageParam = page ? `?page=${page}` : '/';

  const response = await fetch(`https://reqres.in/api/users${pageParam}`);

  const json = await response.json();

  return json.data;
};

export const useGetUsers = (page?: number) =>
  useQuery<User[], boolean>(['users', page], () => getUsers(page));
