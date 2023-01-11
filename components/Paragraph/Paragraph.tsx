import classNames from 'classnames';
import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';
import { FC } from 'react';

export const Paragraph: FC<ParagraphProps> = ({
  size = 'md',
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={classNames(styles.paragraph, className, {
        [styles.sm]: size == 'sm',
        [styles.md]: size == 'md',
        [styles.xl]: size == 'xl',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
