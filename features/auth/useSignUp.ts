import axios from 'axios';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';

type valProps = {
  name: string;
  email: string;
  password: string;
};

export function useSignUp() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (val: valProps) => {
      const response = await axios.post('/api/auth/signup', val);
      return response;
    },
    onSuccess: () => {
      toast.success('Create account success');
      router.push('/signin');
    },
    onError: () => {
      toast.error('Email is already exist');
    },
  });
}
