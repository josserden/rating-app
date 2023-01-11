import { FC } from 'react';
import { Heading } from '..';
import styles from './Loader.module.css';
import Spinner from 'public/spinner.svg';

export const Loader: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinnerContainer}>
        <Heading tag="h2" className="font-bold">
          Loading ...
        </Heading>
        <Spinner className="h-14 w-14 animate-spin" />
      </div>
    </div>
  );
};
