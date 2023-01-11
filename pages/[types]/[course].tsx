import { FC } from 'react';
import Head from 'next/head';
import axios, { AxiosResponse } from 'axios';
import { ParsedUrlQuery } from 'querystring';

import { withLayout } from 'layout/Layout/Layout';
import { RatingPageComponent } from 'page-component';
import { firstLevelMenu } from 'helpers/firstLevelMenu';

import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next';
import { TopLevelCategory, TopPageModel } from 'interfaces/course.interface';
import { MenuItem } from 'interfaces/menu.interface';
import { ProductModel } from 'interfaces/product.interface';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_DOMAIN;

const RatingPage: FC<RatingPageProps> = ({ firstCategory, page, products }) => {
  if (!page || !products) return <></>;

  return (
    <>
      <Head>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <meta property="og:title" content={page.metaTitle} />
        <meta property="og:description" content={page.metaDescription} />
      </Head>

      <RatingPageComponent
        firstCategory={firstCategory}
        page={page}
        products={products}
      />
    </>
  );
};

export default withLayout(RatingPage);

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

export const getStaticProps: GetStaticProps<RatingPageProps> = async ({
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

interface RatingPageProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
