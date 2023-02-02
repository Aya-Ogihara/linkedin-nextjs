import Head from 'next/head';
import { Navigation } from '@/components/Navigation';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [query, setQuery] = useState();
  const router = useRouter();
  const handleOnChange = (e) => setQuery(e.target.value);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    router.push(`/news/${query}`);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='main'>
        <Link href='/contacts'>
          <button>Contact</button>
        </Link>
        <Link href='/news'>
          <button>News</button>
        </Link>
        <div>
          <h2>Search news</h2>
          <form onSubmit={handleOnSubmit}>
            <input type='text' onChange={handleOnChange} />
          </form>
        </div>
      </main>
    </>
  );
}