import React, { FC } from 'react';
import { HeadingProps } from './Heading.props';
import styles from './Heading.module.css';
import classNames from 'classnames';

export const Heading: FC<HeadingProps> = ({ tag, children, className }) => {
  switch (tag) {
    case 'h1':
      return <h1 className={classNames(className, styles.h1)}>{children}</h1>;

    case 'h2':
      return <h2 className={classNames(className, styles.h2)}>{children}</h2>;

    case 'h3':
      return <h3 className={classNames(className, styles.h3)}>{children}</h3>;

    default:
      return <></>;
  }
};
