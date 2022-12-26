import { ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';
import { CardProps } from './Card.props';
import styles from './Card.module.css';

export const Card = forwardRef(
  (
    { color, children, className, ...props }: CardProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    return (
      <div
        className={classNames(styles.card, className, {
          [styles.blue]: color == 'blue',
        })}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
