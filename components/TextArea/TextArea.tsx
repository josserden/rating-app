import classNames from 'classnames';
import { TextAreaProps } from './TextArea.props';
import styles from './TextArea.module.css';
import { FC, ForwardedRef, forwardRef } from 'react';

export const TextArea: FC = forwardRef(
  (
    { className, error, ...props }: TextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <div className="relative">
        <textarea
          ref={ref}
          className={classNames(styles.textArea, className, {
            ['focus-visible:ring-rose-500']: error,
          })}
          name="description"
          cols={30}
          rows={10}
          {...props}
        ></textarea>

        {error && (
          <span
            className=" absolute bottom-0 left-0 text-rose-500"
            role="alert"
          >
            {error.message}
          </span>
        )}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';
