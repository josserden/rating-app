import { FunctionComponent, useRef, useState, KeyboardEvent, FC } from 'react';
import { AppContextProvider, IAppContext } from 'context/app.context';
import { Footer } from 'layout/Footer/Footer';
import { Header } from 'layout/Header/Header';
import { Sidebar } from 'layout/Sidebar/Sidebar';
import { ToTop } from 'components';
import styles from './Layout.module.css';
import { LayoutProps } from './Layout.props';

const Layout: FC<LayoutProps> = ({ children }) => {
  const [skipLinkSnow, setSkipLinkSnow] = useState<boolean>(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  const skipLinkAction = (e: KeyboardEvent) => {
    if (e.code == 'Enter' || e.code == 'Space') {
      e.preventDefault();

      bodyRef.current?.focus();
    }

    setSkipLinkSnow(!skipLinkSnow);
  };

  return (
    <>
      <div className={styles.layoutWrapper}>
        <a
          className={styles.skipLink}
          onFocus={() => setSkipLinkSnow(true)}
          onKeyDown={skipLinkAction}
          tabIndex={1}
        >
          Skip to content
        </a>

        <Header className={styles.layoutHeader} />

        <Sidebar className={styles.layoutSidebar} />

        <main className={styles.layoutMain} ref={bodyRef} tabIndex={0}>
          {children}
        </main>

        <Footer className={styles.layoutFooter} />
      </div>

      <ToTop />
    </>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
