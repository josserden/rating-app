import React, {
  useState,
  useEffect,
  KeyboardEvent,
  forwardRef,
  ForwardedRef,
  useRef,
} from 'react';

import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import classNames from 'classnames';
import { StarIcon } from '@heroicons/react/24/solid';

export const Rating = forwardRef(
  (
    {
      isEditable = false,
      rating,
      setRating,
      error,
      tabIndex,
      ...props
    }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
      new Array(5).fill(<></>)
    );
    const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

    const computeFocus = (rating: number, idx: number): number => {
      if (!isEditable) return -1;
      if (!rating && idx == 0) return tabIndex ?? 0;
      if (rating == idx + 1) return tabIndex ?? 0;

      return -1;
    };

    useEffect(() => {
      constructRating(rating);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rating, tabIndex]);

    const changeDisplay = (rating: number) => {
      if (!isEditable) return;

      constructRating(rating);
    };

    const onClick = (rating: number) => {
      if (!isEditable || !setRating) return;

      setRating(rating);
    };

    const handleKey = (event: KeyboardEvent) => {
      if (!isEditable || !setRating) return;

      if (event.code == 'ArrowRight' || event.code == 'ArrowUp') {
        event.preventDefault();

        if (!rating) return setRating(1);

        setRating(rating < 5 ? rating + 1 : 5);
        ratingArrayRef.current[rating]?.focus();
      }

      if (event.code == 'ArrowLeft' || event.code == 'ArrowDown') {
        event.preventDefault();

        setRating(rating > 1 ? rating - 1 : 1);
        ratingArrayRef.current[rating - 2]?.focus();
      }
    };

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
              tabIndex={computeFocus(rating, index)}
              onKeyDown={handleKey}
              ref={(el) => ratingArrayRef.current?.push(el)}
              role={isEditable ? 'slider' : ''}
              aria-valuemin={1}
              aria-valuemax={1}
              aria-valuenow={rating}
              aria-label={isEditable ? 'Укажите рейтинг' : 'рейтинг' + rating}
              aria-invalid={error ? true : false}
            >
              <StarIcon className={styles.icon} />
            </span>
          );
        }
      );

      setRatingArray(updatedArray);
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
