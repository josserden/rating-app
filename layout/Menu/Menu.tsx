import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import classNames from 'classnames';
import { AppContext } from 'context/app.context';
import { FirstLevelMenu, PageItem } from 'interfaces/menu.interface';
import { firstLevelMenu } from 'helpers/firstLevelMenu';
import styles from './Menu.module.css';

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    visible: {
      transition: shouldReduceMotion
        ? {}
        : {
            when: 'beforeChildren',
            staggerChildren: 0.1,
          },
    },
    hidden: {},
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 'auto',
    },
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      height: 0,
    },
  };

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
      <ul className={styles.secondLevelList} role="navigation">
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
                  aria-expanded={item.isOpened}
                >
                  {item._id.secondCategory}
                </button>

                <motion.ul
                  layout
                  variants={variants}
                  initial={item.isOpened ? 'visible' : 'hidden'}
                  animate={item.isOpened ? 'visible' : 'hidden'}
                  role="navigation"
                >
                  {buildThirdLevel(
                    item.pages,
                    menuItem.route,
                    item.isOpened ?? false
                  )}
                </motion.ul>
              </li>
            );
          })}
      </ul>
    );
  };

  const buildThirdLevel = (
    pages: PageItem[],
    route: string,
    isOpened: boolean
  ) => {
    return (
      <>
        {pages &&
          pages.map((page) => (
            <motion.li key={page.category} variants={variantsChildren}>
              <Link href={`/${route}/${page.alias}`}>
                <a
                  tabIndex={isOpened ? 0 : -1}
                  className={classNames(styles.thirdLevelLink, {
                    [styles.thirdLevelLinkActive]:
                      `/${route}/${page.alias}` == router.asPath,
                  })}
                >
                  {page.category}
                </a>
              </Link>
            </motion.li>
          ))}
      </>
    );
  };

  return <>{menu && buildFirstLevel()}</>;
};
