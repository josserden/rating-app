import classNames from 'classnames';
import { HeaderProps } from './Header.props';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return <header className={classNames(className)} {...props}></header>;
};
