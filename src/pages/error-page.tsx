/** Hooks */
import { useRouteError } from 'react-router-dom';

/** Components */
import { Box, Heading, Text } from '@chakra-ui/react';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box>
      <Heading as="h1">Oops!</Heading>
      <Text my={4}>Sorry, an unexpected error has occurred.</Text>
      <Text>
        <i>{error.statusText || error.message}</i>
      </Text>
    </Box>
  );
}
