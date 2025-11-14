import { useLoaderData } from 'react-router-dom';

function SearchPage() {
  const data = useLoaderData();

  console.log(data);

  return <div>Search</div>;
}

export default SearchPage;
