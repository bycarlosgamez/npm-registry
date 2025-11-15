import PackageListItem from '../../components/PackageListItem';
import type { SearchLoaderResult } from './searchLoader';
import { useLoaderData } from 'react-router-dom';

function SearchPage() {
  const { searchResults } = useLoaderData() as SearchLoaderResult;

  return (
    <div>
      <h1 className='text-2xl font-bold my-6'>Search result</h1>
      <div className='space-y-4 mt-4'>
        {searchResults.map((result) => (
          <PackageListItem pack={result} key={result.name} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
