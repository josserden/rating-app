import { Advantages, CardData, Heading, Sort, Tag } from '@components/index';
import { SortEnum } from '@components/Sort/Sort.props';
import { TopLevelCategory } from 'interfaces/course.interface';
import { ProductModel } from 'interfaces/product.interface';
import { useReducer } from 'react';
import { RatingPageProps } from './RatingPageComponent.props';

export type SortAction =
  | {
      type: SortEnum.Price;
    }
  | {
      type: SortEnum.Rating;
    };

export interface SortReducerState {
  sort: SortEnum;
  products: ProductModel[];
}

const sortReducer = (
  state: SortReducerState,
  action: SortAction
): SortReducerState => {
  switch (action.type) {
    case SortEnum.Rating:
      return {
        sort: SortEnum.Rating,
        products: state.products.sort((a, b) =>
          a.initialRating > b.initialRating ? -1 : 1
        ),
      };

    case SortEnum.Price:
      return {
        sort: SortEnum.Price,
        products: state.products.sort((a, b) =>
          a.initialRating > b.initialRating ? 1 : -1
        ),
      };

    default:
      throw new Error('Incorrect sorting type');
  }
};

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

  const setSort = (sort: SortEnum) => {
    dispatch({ type: sort });
  };

  return (
    <>
      <header className="grid grid-cols-[auto_1fr_auto] items-center justify-items-start gap-5">
        {page && <Heading tag="h1">{page.title}</Heading>}
        {products && (
          <Tag color="grey" size="sm">
            {products.length}
          </Tag>
        )}

        <Sort sort={sort} setSort={setSort} />
      </header>

      <ul>
        {sortedProducts &&
          sortedProducts.map((product) => (
            <li key={product._id}>{product.title}</li>
          ))}
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

      {page?.seoText && (
        <div
          className="prose max-w-none pl-7 pt-10 font-light text-gray-700 prose-headings:mt-5"
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}

      <Heading tag="h2" className="mt-12">
        Получаемые навыки
      </Heading>

      <div className="inline-flex gap-2">
        {page?.tags.map((tag) => (
          <Tag key={tag} color="primary">
            {tag}
          </Tag>
        ))}
      </div>
    </>
  );
};
