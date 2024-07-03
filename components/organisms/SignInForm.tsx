'use client';

import { Button, Input } from '../atoms';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../molecules';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { useSignIn } from '@/features/auth';
import { ReloadIcon } from '@radix-ui/react-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInFormSchema } from '@/lib/form-schema';

export function SignInForm({ buttonLabel }: { buttonLabel: string }) {
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate, isPending } = useSignIn();
  const onSubmit = (val: z.infer<typeof signInFormSchema>) => {
    mutate(val);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='mt-5 space-y-5'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder='Enter your email...'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type='password'
                  placeholder='Enter your password'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isPending}
          className='w-full'>
          {isPending ? (
            <>
              <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
              Loading...
            </>
          ) : (
            buttonLabel
          )}
        </Button>
      </form>
    </Form>
  );
}
