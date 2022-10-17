/** Components */
import { ToastPosition, useToast } from '@chakra-ui/react';

/** Hooks */
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

/** Types */
import { CreateUserInputs } from '../types';

export const useCreateUser = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const toastProps = {
    duration: 4500,
    isClosable: true,
    position: 'top' as ToastPosition
  };

  return useMutation(
    (userData: CreateUserInputs) => {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      };

      return fetch('https://reqres.in/api/users', requestOptions);
    },
    {
      onSuccess: (data, variables) => {
        if (data.status === 201) {
          toast({
            title: `User ${variables.name} has been added!`,
            status: 'success',
            ...toastProps
          });

          navigate('/');
        }
      },
      onError: (error, variables) => {
        toast({
          title: `Error creating user ${variables.name}`,
          description: `${error}`,
          status: 'error',
          ...toastProps
        });
      }
    }
  );
};
