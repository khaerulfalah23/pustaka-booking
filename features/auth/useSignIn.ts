import { toast } from 'sonner';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';

type valProps = {
  email: string;
  password: string;
};

export function useSignIn() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (val: valProps) => {
      const authenticated = await signIn('credentials', {
        ...val,
        redirect: false,
      });
      return authenticated;
    },
    onSuccess: () => {
      toast.success('Login success');
      router.push('');
    },
    onError: (error) => {
      toast.error('Wrong email or password');
      console.log(error);
    },
  });
}
