import { handler } from '../api';
import Link from 'next/link';
import { GoBack } from '@/components/GoBack';

const Category = ({ results }) => {
  console.log(results);
  return (
    <main className='main'>
      <GoBack />
      <h1>Choose by Category</h1>
      <ul>
        {results.map((result) => (
          <li key={result.section}>
            <Link href={`/categories/${result.section}`}>
              {result.display_name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Category;

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
