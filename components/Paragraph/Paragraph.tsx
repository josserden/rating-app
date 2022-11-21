import classNames from 'classnames';
import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';

export const Paragraph = ({
  size = 'md',
  children,
  className,
  ...props
}: ParagraphProps): JSX.Element => {
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
