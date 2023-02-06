import { handler } from '../api';

const Sections = ({ results }) => {
  return (
    <main className='main'>
      <h1>Sections</h1>
      <ul>
        {results.map((result) => (
          <li key={`sections/${result.section}`}>
            <a href={`sections/${result.section}`}>{result.display_name}</a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Sections;

export async function getStaticProps() {
  const API_KEY = process.env.NEW_YORK_TIMES_API_KEY;
  const URL = `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${API_KEY}`;
  const results = await handler(URL);

  return {
    props: {
      results,
    },
  };
}
