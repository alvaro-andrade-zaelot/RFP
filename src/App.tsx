/** Hooks */
import { useGetUsers } from './hooks/useGetUsers';

/** Components */
import { Button, Center, Flex, Grid, Spinner } from '@chakra-ui/react';
import { UserCard } from './components/UserCard';
import { Outlet, useNavigate } from 'react-router-dom';

import './App.css';

function App() {
  const { data: users, isFetching } = useGetUsers();

  const navigate = useNavigate();

  if (isFetching)
    return (
      <Center height="100vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );

  return (
    <Flex gap={4} direction={{ base: 'column', md: 'row' }}>
      <Flex direction="column" gap={4} maxW="70%" flexGrow={1}>
        <Button
          colorScheme="blue"
          onClick={() => navigate('/create-user')}
          width="fit-content"
          mr={8}
          alignSelf="end"
        >
          New
        </Button>
        <Grid
          templateColumns="repeat(auto-fill, 250px)"
          justifyContent="center"
          gap={4}
        >
          {users?.length &&
            users.map(user => (
              <UserCard
                key={user.id}
                first_name={user.first_name}
                email={user.email}
                avatar={user.avatar}
                id={user.id}
              />
            ))}
        </Grid>
      </Flex>
      <Outlet />
    </Flex>
  );
}

export default App;
