import classNames from 'classnames';
import { InputProps } from './Input.props';
import styles from './Input.module.css';
import { ForwardedRef, forwardRef } from 'react';

export const Input = forwardRef(
  (
    { className, error, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div className="relative">
        <input
          ref={ref}
          type="text"
          className={classNames(styles.input, className, {
            ['focus-visible:ring-rose-500']: error,
          })}
          {...props}
        />

        {error && (
          <span className=" absolute -bottom-6 left-0 text-rose-500">
            {error.message}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
