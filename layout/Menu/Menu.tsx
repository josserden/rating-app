import classNames from 'classnames';
import { AppContext } from 'context/app.context';
import { useContext } from 'react';
import styles from './Menu.module.css';
import { FirstLevelMenu, PageItem } from 'interfaces/menu.interface';
import { firstLevelMenu } from 'helpers/firstLevelMenu';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory == secondCategory) {
            m.isOpened = !m.isOpened;
          }

          return m;
        })
      );
  };

  const buildFirstLevel = () => {
    return (
      <ul className="flex flex-col gap-5">
        {firstLevelMenu.map((menu) => (
          <li key={menu.id} className="flex flex-col gap-5">
            <Link href={`/${menu.route}`}>
              <a
                className={classNames(
                  'item-center flex gap-5 text-stone-500 transition-colors hover:text-blue-700 focus:text-blue-700',
                  {
                    ['!text-blue-700']: menu.id == firstCategory,
                  }
                )}
              >
                <span className={classNames('h-6 w-6 text-inherit')}>
                  {menu.icon}
                </span>

                <h2 className="text-lg font-medium leading-6">{menu.name}</h2>
              </a>
            </Link>

            {menu.id == firstCategory && buildSecondLevel(menu)}
          </li>
        ))}
      </ul>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenu) => {
    return (
      <ul className="ml-3 flex flex-col gap-5 border-l-2 border-gray-300 px-3">
        {menu.map((item) => {
          const conditionForOpenMenu = item.pages
            .map(({ alias }) => alias)
            .includes(router.asPath.split('/')[2]);

          if (conditionForOpenMenu) item.isOpened = conditionForOpenMenu;

          return (
            <li key={item._id.secondCategory}>
              <button
                className="text-xs font-light uppercase leading-5 text-gray-700"
                onClick={() => openSecondLevel(item._id.secondCategory)}
              >
                {item._id.secondCategory}
              </button>

              <ul
                className={classNames(
                  item.isOpened ? styles.open : styles.close
                )}
              >
                {buildThirdLevel(item.pages, menuItem.route)}
              </ul>
            </li>
          );
        })}
      </ul>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      <>
        {pages.map((page) => (
          <li key={page.category}>
            <Link href={`/${route}/${page.alias}`}>
              <a
                className={classNames(
                  'text-sm font-medium leading-5 text-stone-600 transition-colors hover:text-blue-700 focus:text-blue-700',
                  {
                    ['!text-blue-700']:
                      `/${route}/${page.alias}` == router.asPath,
                  }
                )}
              >
                {page.category}
              </a>
            </Link>
          </li>
        ))}
      </>
    );
  };

  return <>{menu && buildFirstLevel()}</>;
};
