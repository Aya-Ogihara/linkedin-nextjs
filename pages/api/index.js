export async function handler(URL) {
  const res = await fetch(URL);
  const data = await res.json();
  return data.results;
}
