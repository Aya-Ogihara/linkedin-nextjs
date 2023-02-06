import Link from 'next/link';

const NotFound = () => {
  return (
    <div>
      <h1>404: Sorry the page is not found</h1>
      <Link href='/'>Go back to Home</Link>
    </div>
  );
};

export default NotFound;
