import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useState } from 'react';
import { Input } from '..';
import { SearchProps } from './Search.props';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [query, setQuery] = useState<string>('');
  const router = useRouter();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setQuery(value);
  };

  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        query,
      },
    });
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key == 'Enter') {
      goToSearch();
    }
  };

  return (
    <div className={classNames('relative', className)} {...props}>
      <Input
        id="search"
        placeholder="Search ..."
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />

      <button
        type="button"
        className="absolute right-1 top-1 rounded-md bg-blue-700 p-2 text-slate-50 transition-colors hover:bg-blue-600 hover:text-slate-200 focus:text-slate-200"
        onClick={goToSearch}
      >
        <MagnifyingGlassIcon className="h-4 w-4 fill-current" />
      </button>
    </div>
  );
};
