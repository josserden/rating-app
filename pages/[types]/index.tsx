import axios, { AxiosResponse } from 'axios';
import { firstLevelMenu } from 'helpers/firstLevelMenu';
import { MenuItem } from 'interfaces/menu.interface';
import { withLayout } from 'layout/Layout/Layout';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

const Type = ({ firstCategory }: TypeProps): JSX.Element => {
  return <div>Type: {firstCategory}</div>;
};

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map(({ route }) => `/${route}`),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const firstCategoryItem = firstLevelMenu.find(
    (menu) => menu.route == params.types
  );

  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  const { data: menu }: AxiosResponse<MenuItem[]> = await axios.post<
    MenuItem[]
  >('/api/top-page/find', { firstCategory: firstCategoryItem.id });

  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  };
};

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
