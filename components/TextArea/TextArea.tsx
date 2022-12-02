import classNames from 'classnames';
import { TextAreaProps } from './TextArea.props';
import styles from './TextArea.module.css';

export const TextArea = ({
  className,
  ...props
}: TextAreaProps): JSX.Element => {
  return (
    <textarea
      className={classNames(styles.textArea, className)}
      name="feedback"
      id="feedback"
      cols={30}
      rows={10}
      {...props}
    ></textarea>
  );
};
