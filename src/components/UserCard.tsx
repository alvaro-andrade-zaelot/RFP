/** Components */
import { Avatar, GridItem } from '@chakra-ui/react';

/** Types */
import { User } from '../types';

type UserCardType = Omit<User, 'last_name'>;

export const UserCard = ({ first_name, email, avatar }: UserCardType) => {
  return (
    <GridItem display="flex" flexDir="column" alignItems="center">
      <p>
        <strong>{first_name}</strong>
      </p>
      <p>{email}</p>
      <Avatar size="xl" name={first_name} src={avatar} mt={2} />
    </GridItem>
  );
};
