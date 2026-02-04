import { useMutation } from '@tanstack/react-query';
import { signup } from '@/api/signup.api';

export const useSignup = () => {
  return useMutation({
    mutationFn: signup,
  });
};

