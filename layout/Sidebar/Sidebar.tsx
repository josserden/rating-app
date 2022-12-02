import { Logo, Search } from '@components/index';
import classNames from 'classnames';
import { Menu } from 'layout/Menu/Menu';
import { SidebarProps } from './Sidebar.props';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={classNames(className)} {...props}>
      <Logo>RatingApp</Logo>

      <Search />

      <Menu />
    </div>
  );
};
