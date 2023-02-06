import { handler } from '../api';

const News = ({ results }) => {
  return (
    <main className='main'>
      <h1>News</h1>
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
  );
};

export default News;

export async function getStaticProps() {
  const API_KEY = process.env.NEW_YORK_TIMES_API_KEY;
  const URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;
  const results = await handler(URL);

  return {
    props: {
      results,
    },
  };
}
