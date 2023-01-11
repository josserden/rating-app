import classNames from 'classnames';
import Link from 'next/link';
import { routes } from 'helpers/routes';
import styles from './Logo.module.css';
import { LogoProps } from './Logo.props';
import { FC } from 'react';

export const Logo: FC<LogoProps> = ({ className, children, ...props }) => {
  return (
    <Link href={routes.HOME}>
      <a href="" className={classNames(className, styles.logo)} {...props}>
        {children}
      </a>
    </Link>
  );
};
