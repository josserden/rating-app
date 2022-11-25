import classNames from 'classnames';
import { CardProps } from './Card.props';
import styles from './Card.module.css';

export const Card = ({
  color,
  children,
  className,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div
      className={classNames(styles.card, className, {
        [styles.blue]: color == 'blue',
      })}
      {...props}
    >
      {children}
    </div>
  );
};
