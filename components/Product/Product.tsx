import classNames from 'classnames';
import { convertPrice } from 'helpers/convertPrice';
import { declension } from 'helpers/declension';
import Image from 'next/image';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Button, Card, Paragraph, Rating, Review, ReviewForm, Tag } from '..';
import styles from './Product.module.css';
import { ProductProps } from './Product.props';

export const Product = ({ product, className }: ProductProps): JSX.Element => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const [openComments, setOpenComments] = useState<boolean>(false);

  const handleBtnClick = () => {
    setOpenComments(!openComments);
  };

  return (
    <>
      <Card className={classNames(styles.cardWrapper, className)}>
        <div className={styles.cardHeader}>
          <div className={styles.cardHeaderImg}>
            <Image
              src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
              alt={product.title}
              width={70}
              height={70}
              className="rounded"
            />
          </div>

          <div
            className={classNames(styles.cardHeaderBox, {
              ['w-full']: isTabletOrMobile,
            })}
          >
            <h2 className={styles.cardHeaderTitle}>{product.title}</h2>
            <div className={styles.cardHeaderTagsBox}>
              {product.categories.map((category) => (
                <Tag key={category} color="ghost" size="sm">
                  {category}
                </Tag>
              ))}
            </div>
          </div>

          <div
            className={classNames(styles.cardHeaderBox, {
              ['lg:ml-auto']: !isTabletOrMobile,
            })}
          >
            <span
              className={classNames(styles.cardHeaderSubtitle, {
                [styles.cardHeaderSubtitleCentered]: product.oldPrice,
              })}
            >
              {convertPrice(product.price)}

              {product.oldPrice && (
                <Tag color="green" size="sm">
                  {convertPrice(product.price - product.oldPrice)}
                </Tag>
              )}
            </span>

            <span className={styles.cardHeaderTitleDescription}>цена</span>
          </div>

          <div className={styles.cardHeaderBox}>
            <span className={styles.cardHeaderSubtitle}>
              {convertPrice(product.credit)}
            </span>
            <span className={styles.cardHeaderTitleDescription}>кредит</span>
          </div>

          <div className={styles.cardHeaderBox}>
            <Rating
              className="flex"
              rating={product.reviewAvg ?? product.initialRating}
            />

            <span className={styles.cardHeaderTitleDescription}>
              {product.reviewCount}{' '}
              {declension(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
            </span>
          </div>
        </div>

        <div className={styles.cardBody}>
          <Paragraph size="md">{product.description}</Paragraph>

          <div className={styles.cardBodyWrapper}>
            <ul className={styles.cardBodyInfo}>
              {product.characteristics.map(({ name, value }) => (
                <li key={name} className={styles.cardBodyInfoItem}>
                  <h4 className={styles.cardBodyInfoItemTitle}>{name}</h4>
                  <span className={styles.cardBodyInfoItemDecor}></span>
                  <Paragraph size="md">{value}</Paragraph>
                </li>
              ))}
            </ul>

            {product.advantages && (
              <div className={styles.cardBodyReviews}>
                <div
                  className={classNames(
                    styles.cardBodyReviewItem,
                    'border-l-green-600'
                  )}
                >
                  <h4 className={styles.cardBodyInfoItemTitle}>Преимущества</h4>
                  <Paragraph size="md">{product.advantages}</Paragraph>
                </div>

                {product.disadvantages && (
                  <div
                    className={classNames(
                      styles.cardBodyReviewItem,
                      ' border-l-rose-600'
                    )}
                  >
                    <h4 className={styles.cardBodyInfoItemTitle}>Недостатки</h4>
                    <Paragraph size="md">{product.disadvantages}</Paragraph>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className={styles.cardFooter}>
          <Button appearance="primary">Узнать подробнее</Button>
          <Button
            appearance="ghost"
            arrow={openComments ? 'down' : 'right'}
            onClick={handleBtnClick}
          >
            Читать отзывы
          </Button>
        </div>
      </Card>

      {openComments && (
        <Card className="-mt-10 grid grid-cols-1 gap-3  !bg-neutral-50 px-7">
          {product.reviews.length > 0 && (
            <div className="grid grid-cols-1 gap-5 pb-3 ">
              {product.reviews.map((review) => (
                <Review key={review._id} review={review} />
              ))}
            </div>
          )}

          <ReviewForm productId={product._id} />
        </Card>
      )}
    </>
  );
};