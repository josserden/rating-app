import { withLayout } from 'layout/Layout/Layout';
import type { GetStaticProps } from 'next';
import { useState } from 'react';
import { Button, Heading, Paragraph, Rating, Tag } from '../components';
import axios, { AxiosResponse } from 'axios';
import { MenuItem } from 'interfaces/menu.interface';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_DOMAIN;

const Home = ({ menu, firstCategory }: HomeProps): JSX.Element => {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Heading tag="h1" className="mb-5">
        Курсы по Photoshop
      </Heading>

      <Heading tag="h3">Профессия дизайнер от 0 до PRO</Heading>

      <Heading tag="h2">Вакансии - Photoshop</Heading>

      <Button
        appearance="ghost"
        arrow="down"
        onClick={() => console.log('Click')}
      >
        Кнопка
      </Button>

      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>

      <Button appearance="ghost" onClick={() => console.log('Click')}>
        Кнопка
      </Button>

      <Paragraph size="sm">Маленький</Paragraph>
      <Paragraph>Средний</Paragraph>
      <Paragraph size="xl">Большой</Paragraph>

      <Tag size="sm">маленький</Tag>

      <Tag size="sm" color="red">
        маленький
      </Tag>

      <Tag size="sm" color="green">
        маленький
      </Tag>

      <Tag color="primary">маленький</Tag>

      <Tag color="primary" href="https://github.com/josserden">
        ссылка
      </Tag>

      <Rating rating={rating} isEditable setRating={setRating} />
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
