import classNames from 'classnames';
import { AppContextProvider, IAppContext } from 'context/app.context';
import { Footer } from 'layout/Footer/Footer';
import { Header } from 'layout/Header/Header';
import { Sidebar } from 'layout/Sidebar/Sidebar';
import { FunctionComponent } from 'react';
import styles from './Layout.module.css';
import { LayoutProps } from './Layout.props';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="grid min-h-screen grid-cols-sm grid-rows-sm grid-areas-sm md:grid-cols-md md:grid-rows-md md:grid-areas-md">
      <Header className="grid-in-header md:hidden" />

      <Sidebar
        className={
          'hidden min-h-full flex-col gap-6 py-8 pr-7 pl-6 grid-in-sidebar md:flex'
        }
      />

      <main className="p-8 grid-in-body">{children}</main>

      <Footer className="grid-in-footer" />
    </div>
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
