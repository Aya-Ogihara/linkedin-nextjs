import { handler } from '../api';

const News = ({ results, title }) => {
  return (
    <div>
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
    </div>
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
  const URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;
  const results = await handler(URL);

  switch (params.path) {
    case 'top-stories':
      return {
        props: {
          results,
          title: 'Top Stories',
        },
      };
    case 'popular':
      return {
        props: {
          results,
          title: 'Popular News',
        },
      };
    default:
      return {
        props: null,
      };
  }
}
