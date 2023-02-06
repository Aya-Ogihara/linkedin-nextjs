import { GoBack } from '@/components/GoBack';
import { search } from '../api';

const Category = ({ results, category }) => {
  return (
    <main className='main'>
      <GoBack />
      <h1>Category Name: {category}</h1>
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

export default Category;

export async function getServerSideProps({ params }) {
  const API_KEY = process.env.NEW_YORK_TIMES_API_KEY;
  const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${params.category}&api-key=${API_KEY}`;
  const results = await search(URL);
  return {
    props: {
      results,
      category: params.category,
    },
  };
}
