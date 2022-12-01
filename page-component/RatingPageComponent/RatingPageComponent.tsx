import {
  Advantages,
  CardData,
  Heading,
  Paragraph,
  Tag,
} from '@components/index';
import { TopLevelCategory } from 'interfaces/course.interface';
import React from 'react';
import { RatingPageProps } from './RatingPageComponent.props';

export const RatingPageComponent = ({
  page,
  products,
  firstCategory,
}: RatingPageProps): JSX.Element => {
  return (
    <>
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

      {firstCategory == TopLevelCategory.Courses && page.hh && (
        <CardData {...page.hh} />
      )}

      {page?.advantages && page.advantages.length > 0 && (
        <>
          <Heading tag="h2" className="mt-12">
            Преимущества
          </Heading>

          <Advantages advantages={page.advantages} />
        </>
      )}

      {page.seoText && (
        <div
          className="prose max-w-none pl-7 pt-10 font-light text-gray-700 prose-headings:mt-5"
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}

      <Heading tag="h2" className="mt-12">
        Получаемые навыки
      </Heading>

      <div className="inline-flex gap-2">
        {page.tags.map((tag) => (
          <Tag key={tag} color="primary">
            {tag}
          </Tag>
        ))}
      </div>
    </>
  );
};
