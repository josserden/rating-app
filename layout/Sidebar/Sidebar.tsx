import { Logo } from '@components/index';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import { Menu } from 'layout/Menu/Menu';
import { SidebarProps } from './Sidebar.props';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={classNames(className)} {...props}>
      <Logo>RatingApp</Logo>

      <div className="relative shadow-md">
        <input
          type="text"
          className="w-full rounded-md border-none pl-4 pr-1 text-neutral-600 placeholder:text-neutral-400 focus:outline-none focus-visible:ring-2"
          id="search"
          placeholder="Search ..."
        />

        <button
          type="button"
          className="absolute right-1 top-1 rounded-md bg-blue-700 p-2 text-slate-50 transition-colors hover:bg-blue-600 hover:text-slate-200 focus:text-slate-200"
        >
          <MagnifyingGlassIcon className="h-4 w-4 fill-current" />
        </button>
      </div>

      <Menu />
    </div>
  );
};
