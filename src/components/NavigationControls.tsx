import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

const navigationButtonProps = {
  colorScheme: 'blue',
  variant: 'outline',
  size: 'sm'
};

type NavigationControlsProps = {
  currentPage: number;
  setNextPage: Dispatch<SetStateAction<number>>;
};

export const NavigationControls = ({
  currentPage,
  setNextPage
}: NavigationControlsProps) => {
  return (
    <Flex justifyContent="end" gap={2}>
      <IconButton
        aria-label="Previous page"
        onClick={() => setNextPage(prevPage => prevPage - 1)}
        icon={<ArrowBackIcon />}
        disabled={currentPage < 2}
        {...navigationButtonProps}
      />
      <IconButton
        aria-label="Next page"
        onClick={() => setNextPage(prevPage => prevPage + 1)}
        icon={<ArrowForwardIcon />}
        disabled={currentPage > 1}
        {...navigationButtonProps}
      />
    </Flex>
  );
};
