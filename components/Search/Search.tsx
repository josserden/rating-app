import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { routes } from 'helpers/routes';
import { Input } from '..';
import { SearchProps } from './Search.props';
import styles from './Search.module.css';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [query, setQuery] = useState<string>('');
  const router = useRouter();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setQuery(value);
  };

  const goToSearch = () => {
    router.push({
      pathname: routes.SEARCH,
      query: {
        query,
      },
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;

    if (key == 'Enter') {
      goToSearch();
    }
  };

  return (
    <div className={classNames(styles.searchWrapper, className)} {...props}>
      <Input
        id="search"
        placeholder="Search ..."
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />

      <button
        type="button"
        className={styles.searchButton}
        onClick={goToSearch}
      >
        <MagnifyingGlassIcon className={styles.searchIcon} />
      </button>
    </div>
  );
};
