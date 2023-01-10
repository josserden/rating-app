import classNames from 'classnames';
import { SortEnum, SortProps } from './Sort.props';
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';
import styles from './Sort.module.css';

const sortData = [
  { id: SortEnum.Rating, type: SortEnum.Rating, text: 'По рейтингу' },
  { id: SortEnum.Price, type: SortEnum.Price, text: 'По цене' },
];

export const Sort = ({
  sort,
  setSort,
  className,
  ...props
}: SortProps): JSX.Element => {
  return (
    <div className={classNames(styles.sortWrapper, className)} {...props}>
      {sortData &&
        sortData.map(({ id, type, text }) => (
          <button
            key={id}
            type="button"
            onClick={() => setSort(type)}
            className={classNames(styles.sortBtn, {
              [styles.sortBtnActive]: sort == type,
            })}
            aria-pressed={sort == type}
            aria-labelledby={text}
          >
            {sort == type && (
              <Bars3BottomRightIcon className={styles.sortBtnIcon} />
            )}
            {text}
          </button>
        ))}
    </div>
  );
};
