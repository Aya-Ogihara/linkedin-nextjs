import { handler } from '../api';
import Head from 'next/head';

const Section = ({ results, title }) => {
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

export default Section;

const API_KEY = process.env.NEW_YORK_TIMES_API_KEY;

export async function getStaticPaths() {
  const URL = `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${API_KEY}`;
  const results = await handler(URL);
  return {
    paths: results.map((result) => {
      return { params: { section: result.section } };
    }),
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const URL = `https://api.nytimes.com/svc/news/v3/content/nyt/${params.section}.json?api-key=${API_KEY}`;

  const results = await handler(URL);
  return {
    props: {
      results,
      title: params.section,
    },
  };
}
