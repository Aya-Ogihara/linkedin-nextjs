import { search } from '../api';

const News = ({ results, query }) => {
  return (
    <div>
      <h1>Search results for: {query}</h1>
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

export async function getServerSideProps({ params }) {
  const API_KEY = process.env.NEW_YORK_TIMES_API_KEY;
  const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${params.query}&api-key=${API_KEY}`;
  const results = await search(URL);
  return {
    props: {
      results,
      query: params.query,
    },
  };
}
