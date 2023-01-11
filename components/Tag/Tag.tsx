import classNames from 'classnames';
import { FC } from 'react';
import styles from './Tag.module.css';
import { TagProps } from './Tag.props';

export const Tag: FC<TagProps> = ({
  size = 'md',
  color = 'ghost',
  children,
  className,
  href,
  ...props
}) => {
  return (
    <div
      className={classNames(styles.tag, className, {
        [styles.sm]: size == 'sm',
        [styles.md]: size == 'md',
        [styles.ghost]: color == 'ghost',
        [styles.red]: color == 'red',
        [styles.green]: color == 'green',
        [styles.grey]: color == 'grey',
        [styles.primary]: color == 'primary',
      })}
      {...props}
    >
      {href ? (
        <a className={classNames(styles.link, className)} href={href}>
          {children}
        </a>
      ) : (
        <> {children}</>
      )}
    </div>
  );
};
