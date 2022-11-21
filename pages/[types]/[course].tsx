import axios, { AxiosResponse } from 'axios';
import { firstLevelMenu } from 'helpers/firstLevelMenu';
import { TopLevelCategory, TopPageModel } from 'interfaces/course.interface';
import { MenuItem } from 'interfaces/menu.interface';
import { ProductModel } from 'interfaces/product.interface';
import { withLayout } from 'layout/Layout/Layout';
import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next';
import { ParsedUrlQuery } from 'querystring';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_DOMAIN;

const Course = ({ page, products }: CourseProps) => {
  return <>{products && products.length}</>;
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];

  firstLevelMenu.forEach(async (menu) => {
    const { data }: AxiosResponse<MenuItem[]> = await axios.post<MenuItem[]>(
      '/api/top-page/find',
      { firstCategory: menu.id }
    );

    paths = paths.concat(
      data.flatMap(({ pages }) =>
        pages.map(({ alias }) => `/${menu.route}/${alias}`)
      )
    );
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({
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

  try {
    const { data: menu }: AxiosResponse<MenuItem[]> = await axios.post<
      MenuItem[]
    >('/api/top-page/find', { firstCategory: firstCategoryItem.id });

    if (menu.length == 0) {
      return {
        notFound: true,
      };
    }

    const { data: page }: AxiosResponse<TopPageModel> =
      await axios.get<TopPageModel>(`/api/top-page/byAlias/${params.course}`);

    const { data: products }: AxiosResponse<ProductModel[]> = await axios.post<
      ProductModel[]
    >('/api/product/find/', {
      category: page.category,
      limit: 10,
    });

    return {
      props: {
        menu,
        page,
        products,
        firstCategory: firstCategoryItem.id,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
