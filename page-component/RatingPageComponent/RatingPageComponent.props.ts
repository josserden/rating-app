import { TopLevelCategory, TopPageModel } from 'interfaces/course.interface';
import { ProductModel } from 'interfaces/product.interface';

export interface RatingPageProps extends Record<string, unknown> {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
