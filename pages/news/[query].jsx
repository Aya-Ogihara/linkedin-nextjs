import React from 'react';

const News = () => {
  return (
    <div>
      <h1>Search result</h1>
    </div>
  );
};

export default News;

export async function getServerSideProps() {
  // const API_KEY = process.env.NEW_YORK_TIMES_API_KEY;
  // const URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;
  // const res = await fetch(URL);
  // const data = await res.json();
  return {
    props: {},
  };
}
