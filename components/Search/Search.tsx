import React, { FC, ChangeEvent, KeyboardEvent, useState } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { routes } from 'helpers/routes';
import { Button, Input } from '..';
import { SearchProps } from './Search.props';
import styles from './Search.module.css';

export const Search: FC<SearchProps> = ({ className, ...props }) => {
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
    <form
      className={classNames(styles.searchWrapper, className)}
      role="search"
      {...props}
    >
      <Input
        id="search"
        placeholder="Search ..."
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />

      <Button
        className={styles.searchButton}
        appearance="primary"
        onClick={goToSearch}
        aria-label="Search"
      >
        <MagnifyingGlassIcon className={styles.searchIcon} />
      </Button>
    </form>
  );
};
