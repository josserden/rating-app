import classNames from 'classnames';
import { SortEnum, SortProps } from './Sort.props';
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';

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
    <div
      className={classNames('flex items-center gap-11', className)}
      {...props}
    >
      {sortData &&
        sortData.map(({ id, type, text }) => (
          <button
            key={id}
            type="button"
            onClick={() => setSort(type)}
            className={classNames(
              'flex items-center gap-2 text-base font-normal leading-6 text-gray-800 transition-colors hover:text-gray-500 focus:text-gray-500',
              {
                ['!font-bold text-blue-700 hover:text-blue-500 focus:text-blue-500']:
                  sort == type,
              }
            )}
          >
            {sort == type && <Bars3BottomRightIcon className="w-5" />} {text}
          </button>
        ))}

      {/* <button
        type="button"
        onClick={() => setSort(SortEnum.Rating)}
        className={classNames({
          ['active']: sort == SortEnum.Rating,
        })}
      >
        <Bars3BottomLeftIcon /> По рейтингу
      </button>

      <button
        type="button"
        onClick={() => setSort(SortEnum.Price)}
        className={classNames({
          ['active']: sort == SortEnum.Price,
        })}
      >
        <Bars3BottomLeftIcon /> По цене
      </button> */}
    </div>
  );
};
