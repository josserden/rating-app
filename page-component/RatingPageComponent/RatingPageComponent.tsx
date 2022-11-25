import { CardData, Heading, Tag } from '@components/index';
import { TopLevelCategory } from 'interfaces/course.interface';
import React from 'react';
import { RatingPageProps } from './RatingPageComponent.props';

export const RatingPageComponent = ({
  page,
  products,
  firstCategory,
}: RatingPageProps): JSX.Element => {
  return (
    <div className="px-8">
      <header className="grid grid-cols-[auto_1fr_auto] items-center justify-items-start gap-5">
        {page && <Heading tag="h1">{page.title}</Heading>}
        {products && (
          <Tag color="grey" size="sm">
            {products.length}
          </Tag>
        )}

        <span>Сортировка</span>
      </header>

      <ul>
        {products &&
          products.map((product) => <li key={product._id}>{product.title}</li>)}
      </ul>

      <div className="grid grid-cols-[auto_1fr_auto] items-center justify-items-start gap-5">
        {page && <Heading tag="h2">Вакансии - {page.category}</Heading>}

        {products && (
          <Tag color="red" size="sm">
            {products.length}
          </Tag>
        )}

        <span>Сортировка</span>
      </div>

      {firstCategory == TopLevelCategory.Courses && <CardData {...page.hh} />}
    </div>
  );
};
