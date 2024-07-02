import { Metadata } from 'next';
import { SignupForm } from '@/components/organisms';
import { AuthLayout } from '@/components/templates';

export const metadata: Metadata = {
  title: 'Sign Up | Pustaka-Booking',
  description: 'Sign Up | Pustaka-Booking',
};

export default function SignUpPage() {
  return (
    <AuthLayout
      title='Sign Up'
      desc='Please create an account'
      label='Already have an account'
      link='Sign In'>
      <SignupForm buttonLabel='Sign Up' />
    </AuthLayout>
  );
}
