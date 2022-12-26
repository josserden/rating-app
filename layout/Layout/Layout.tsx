import { FunctionComponent } from 'react';
import { AppContextProvider, IAppContext } from 'context/app.context';
import { Footer } from 'layout/Footer/Footer';
import { Header } from 'layout/Header/Header';
import { Sidebar } from 'layout/Sidebar/Sidebar';
import { ToTop } from 'components';
import styles from './Layout.module.css';
import { LayoutProps } from './Layout.props';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <div className={styles.layoutWrapper}>
        <Header className={styles.layoutHeader} />

        <Sidebar className={styles.layoutSidebar} />

        <main className={styles.layoutMain}>{children}</main>

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
