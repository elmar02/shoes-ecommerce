import { Inter } from 'next/font/google'
import Layout from '../../layout/Layout'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/home');
  }, []);

  return (
    <></>
  )
}
