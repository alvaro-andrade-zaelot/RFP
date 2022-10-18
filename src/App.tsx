/** Hooks */
import { useGetUsers } from './hooks/useGetUsers';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

/** Components */
import { Button, Center, Flex, Grid, Heading, Spinner } from '@chakra-ui/react';
import { NavigationControls } from './components/NavigationControls';
import { UserCard } from './components/UserCard';

import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: users, isFetching } = useGetUsers(currentPage);

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
      <Heading>Page {currentPage}</Heading>
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
        <NavigationControls
          currentPage={currentPage}
          setNextPage={setCurrentPage}
        />
      </Flex>
      <Outlet />
    </Flex>
  );
}

export default App;
