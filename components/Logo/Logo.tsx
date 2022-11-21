import classNames from 'classnames';
import Link from 'next/link';
import styles from './Logo.module.css';
import { LogoProps } from './Logo.props';

export const Logo = ({
  className,
  children,
  ...props
}: LogoProps): JSX.Element => {
  return (
    <Link href="/">
      <a href="" className={classNames(className, styles.logo)} {...props}>
        {children}
      </a>
    </Link>
  );
};
