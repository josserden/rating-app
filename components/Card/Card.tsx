import { ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Card.module.css';
import { CardProps } from './Card.props';

export const Card = forwardRef(
  (
    { color = 'white', children, className, ...props }: CardProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        className={classNames(styles.card, className, {
          [styles.blue]: color == 'blue',
        })}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
