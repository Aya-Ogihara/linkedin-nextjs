import { handler } from '../api';
import Head from 'next/head';

const News = ({ results, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={title} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className='main'>
        <h1>{title}</h1>
        <ul>
          {results.map((result) => (
            <li key={result.url}>
              <a href={result.url} target='_blank' rel='noreferrer'>
                {result.title}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default News;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { path: 'top-stories' } },
      { params: { path: 'popular' } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const API_KEY = process.env.NEW_YORK_TIMES_API_KEY;
  const TOP_STORIES_URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;
  const POPULAR_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`;

  switch (params.path) {
    case 'top-stories':
      return {
        props: {
          results: await handler(TOP_STORIES_URL),
          title: 'Top Stories',
        },
      };
    case 'popular':
      return {
        props: {
          results: await handler(POPULAR_URL),
          title: 'Popular News',
        },
      };
    default:
      return {
        props: null,
      };
  }
}
