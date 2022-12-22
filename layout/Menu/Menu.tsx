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
      <ul className={styles.firstLevelList}>
        {firstLevelMenu.map((menu) => (
          <li key={menu.id} className={styles.firstLevelList}>
            <Link href={`/${menu.route}`}>
              <a
                className={classNames(styles.firstLevelLink, {
                  [styles.firstLevelLinkActive]: menu.id == firstCategory,
                })}
              >
                <span className={classNames(styles.firstLevelIcon)}>
                  {menu.icon}
                </span>

                <h2 className={styles.firstLevelTitle}>{menu.name}</h2>
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
      <ul className={styles.secondLevelList}>
        {menu &&
          menu.map((item) => {
            const conditionForOpenMenu = item.pages
              .map(({ alias }) => alias)
              .includes(router.asPath.split('/')[2]);

            if (conditionForOpenMenu) item.isOpened = conditionForOpenMenu;

            return (
              <li key={item._id.secondCategory}>
                <button
                  className={styles.secondLevelItem}
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
        {pages &&
          pages.map((page) => (
            <li key={page.category}>
              <Link href={`/${route}/${page.alias}`}>
                <a
                  className={classNames(styles.thirdLevelLink, {
                    [styles.thirdLevelLinkActive]:
                      `/${route}/${page.alias}` == router.asPath,
                  })}
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
