/** Components */
import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  ToastPosition,
  useToast
} from '@chakra-ui/react';

/** Hooks */
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreateUser } from '../hooks/useCreateUser';

/** Types */
import { CreateUserInputs } from '../types';

export const CreateUserForm = () => {
  const mutation = useCreateUser();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateUserInputs>();

  const onSubmit: SubmitHandler<CreateUserInputs> = data =>
    mutation.mutate(data);

  return (
    <Center>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="false">
        <FormControl isInvalid={!!errors.name}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            {...register('name', { required: 'Name is required' })}
          />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.email} mt={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            {...register('email', { required: 'Job is required' })}
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          colorScheme="blue"
          my={4}
          isLoading={mutation.isLoading}
          loadingText="Submitting"
        >
          Submit
        </Button>
      </form>
    </Center>
  );
};
