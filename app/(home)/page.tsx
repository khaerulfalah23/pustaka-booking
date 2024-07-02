import { Button } from '@/components/atoms';
import Link from 'next/link';

export default function Home() {
  return (
    <Link href='/signup'>
      <Button>Sign Up</Button>
    </Link>
  );
}
