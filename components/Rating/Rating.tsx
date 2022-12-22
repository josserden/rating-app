import React, {
  useState,
  useEffect,
  KeyboardEvent,
  forwardRef,
  ForwardedRef,
} from 'react';

import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import classNames from 'classnames';
import { StarIcon } from '@heroicons/react/24/solid';

export const Rating = forwardRef(
  (
    { isEditable = false, rating, setRating, error, ...props }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
      new Array(5).fill(<></>)
    );

    useEffect(() => {
      constructRating(rating);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rating]);

    const constructRating = (currentRating: number) => {
      const updatedArray = ratingArray.map(
        (rtg: JSX.Element, index: number) => {
          return (
            <span
              key={index}
              className={classNames(styles.star, {
                [styles.filled]: index < currentRating,
                [styles.editable]: isEditable,
              })}
              onMouseEnter={() => changeDisplay(index + 1)}
              onMouseLeave={() => changeDisplay(rating)}
              onClick={() => onClick(index + 1)}
            >
              <StarIcon
                className={styles.icon}
                tabIndex={isEditable ? 0 : -1}
                onKeyDown={(event: KeyboardEvent<SVGElement>) =>
                  isEditable && handleSpace(index + 1, event)
                }
              />
            </span>
          );
        }
      );

      setRatingArray(updatedArray);
    };

    const changeDisplay = (rating: number) => {
      if (!isEditable) return;

      constructRating(rating);
    };

    const onClick = (rating: number) => {
      if (!isEditable || !setRating) return;

      setRating(rating);
    };

    const handleSpace = (rating: number, event: KeyboardEvent<SVGElement>) => {
      if (event.code != 'Space' || !setRating) return;

      setRating(rating);
    };

    return (
      <div ref={ref} {...props}>
        {ratingArray.map((rtg, idx) => (
          <span
            className={classNames({
              [styles.error]: error,
            })}
            key={idx}
          >
            {rtg}
          </span>
        ))}

        {error && (
          <span className="absolute -bottom-6 right-0 text-rose-500">
            {error.message}
          </span>
        )}
      </div>
    );
  }
);

Rating.displayName = 'Rating';
