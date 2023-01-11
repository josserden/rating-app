import { FC } from 'react';
import { Logo, Search } from '@components/index';
import classNames from 'classnames';
import { Menu } from 'layout/Menu/Menu';
import { SidebarProps } from './Sidebar.props';

export const Sidebar: FC<SidebarProps> = ({ className, ...props }) => {
  return (
    <div className={classNames(className)} {...props}>
      <Logo>RatingApp</Logo>

      <Search />

      <Menu />
    </div>
  );
};
