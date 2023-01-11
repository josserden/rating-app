import { withLayout } from 'layout/Layout/Layout';
import type { GetStaticProps } from 'next';
import { useState } from 'react';
import {
  Button,
  Heading,
  Input,
  Paragraph,
  Rating,
  Tag,
  TextArea,
} from '../components';
import axios, { AxiosResponse } from 'axios';
import { MenuItem } from 'interfaces/menu.interface';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_DOMAIN;

const Home = () => {
  return (
    <>
      <Heading tag="h1" className="mb-5">
        Home Page
      </Heading>
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu }: AxiosResponse<MenuItem[]> = await axios.post<
    MenuItem[]
  >('/api/top-page/find', { firstCategory });

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
