import Link from 'next/link';
import { PropsWithChildren } from 'react';

type AuthLayoutProps = {
  title: string;
  desc: string;
  label: string;
  link: string;
};

export function AuthLayout({
  title,
  desc,
  label,
  link,
  children,
}: AuthLayoutProps & PropsWithChildren) {
  return (
    <main className='relative w-full h-screen'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-80'>
        <div className='rounded-xl border bg-card text-card-foreground shadow p-5'>
          <div className='font-semibold text-center text-2xl mb-2'>{title}</div>
          <div className='text-sm text-gray-500 text-center'>{desc}</div>
          {children}
          <div className='text-sm mt-5'>
            {label}{' '}
            <Link
              href='/signin'
              className='text-primary'>
              {link}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
