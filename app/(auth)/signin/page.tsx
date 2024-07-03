import { Metadata } from 'next';
import { SignInForm } from '@/components/organisms';
import { AuthLayout } from '@/components/templates';

export const metadata: Metadata = {
  title: 'Sign In | Pustaka-Booking',
  description: 'Sign In | Pustaka-Booking',
};

export default function SignInPage() {
  return (
    <AuthLayout
      title='Login'
      desc='Please login to your account'
      label='Don’t have an account'
      link='Sign Up'>
      <SignInForm buttonLabel='Login' />
    </AuthLayout>
  );
}
