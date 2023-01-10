import { ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';
import { CardProps } from './Card.props';
import styles from './Card.module.css';

export const Card = forwardRef(
  (
    { color = 'white', children, className, ...props }: CardProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    console.log(ref);
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
