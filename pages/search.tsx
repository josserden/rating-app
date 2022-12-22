import axios, { AxiosResponse } from 'axios';
import { MenuItem } from 'interfaces/menu.interface';
import { withLayout } from 'layout/Layout/Layout';
import { GetStaticProps } from 'next';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_DOMAIN;


const Search = (): JSX.Element => {
  return <div>Search</div>;
};

export default withLayout(Search);

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
