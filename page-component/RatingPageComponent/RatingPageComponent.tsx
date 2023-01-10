import {
  Advantages,
  CardData,
  Heading,
  Product,
  Sort,
  Tag,
} from '@components/index';
import { SortEnum } from '@components/Sort/Sort.props';
import { sortReducer } from 'helpers/sortReducer';
import { TopLevelCategory } from 'interfaces/course.interface';
import { useEffect, useReducer } from 'react';
import { RatingPageProps } from './RatingPageComponent.props';
import styles from './RatingPageComponent.module.css';
import { useReducedMotion } from 'framer-motion';

export const RatingPageComponent = ({
  page,
  products,
  firstCategory,
}: RatingPageProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatch] = useReducer(
    sortReducer,
    {
      products,
      sort: SortEnum.Rating,
    }
  );
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    dispatch({ type: 'reset', initialState: products });
  }, [products]);

  const setSort = (sort: SortEnum) => {
    dispatch({ type: sort });
  };

  return (
    <>
      <header className={styles.mainPageHeader}>
        {page && <Heading tag="h1">{page.title}</Heading>}

        {products && (
          <Tag color="grey" size="sm" aria-label={`${products.length} counter`}>
            {products.length}
          </Tag>
        )}

        <Sort sort={sort} setSort={setSort} />
      </header>

      <div className="grid grid-cols-1 gap-4">
        {sortedProducts &&
          sortedProducts.map((product) => (
            <Product
              layout={shouldReduceMotion ? false : true}
              product={product}
              key={product._id}
            />
          ))}
      </div>

      <div className={styles.mainPageTitle}>
        {page && <Heading tag="h2">Вакансии - {page.category}</Heading>}

        {products && (
          <Tag color="red" size="sm">
            {products.length}
          </Tag>
        )}
      </div>

      {firstCategory == TopLevelCategory.Courses && page.hh && (
        <CardData {...page.hh} />
      )}

      {page?.advantages && page.advantages.length > 0 && (
        <>
          <Heading tag="h2" className="mt-12 mb-6">
            Преимущества
          </Heading>

          <Advantages advantages={page.advantages} />
        </>
      )}

      {page?.seoText && (
        <div
          className={styles.seoTextWrapper}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}

      <Heading tag="h2" className="mt-12  mb-6">
        Получаемые навыки
      </Heading>

      <div className={styles.tagWrapper}>
        {page?.tags.map((tag) => (
          <Tag key={tag} color="primary" size="sm">
            {tag}
          </Tag>
        ))}
      </div>
    </>
  );
};
