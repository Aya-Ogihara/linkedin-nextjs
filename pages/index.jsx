import Head from 'next/head';
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

  const links = [
    {
      path: 'top-stories',
      title: 'Top Stories',
    },
    {
      path: 'popular',
      title: 'Popular News',
    },
  ];

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='description' content='Home' />
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
        <div>
          {links.map((link) => (
            <div key={link.path}>
              <a href={`news/${link.path}`}>{link.title}</a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
