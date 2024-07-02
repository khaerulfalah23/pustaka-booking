import './globals.css';
import { Toaster } from 'sonner';
import { Poppins } from 'next/font/google';
import { Metadata } from 'next';
import { ReactQueryClientProvider } from '@/components/atoms';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Pustaka-Booking',
  description: 'Pustaka-Booking',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html
        lang='en'
        suppressHydrationWarning={true}>
        <body className={poppins.className}>
          <Toaster
            position='top-right'
            richColors
          />
          {children}
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
