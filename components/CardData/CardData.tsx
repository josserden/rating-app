import { StarIcon } from '@heroicons/react/24/solid';
import { convertPrice } from 'helpers/convertPrice';
import { Card } from '..';
import { CardDataProps } from './CardData.props';
import styles from './CardData.module.css';

export const CardData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}: CardDataProps): JSX.Element => {
  return (
    <div className=" mt-5 grid gap-7 lg:grid-cols-[180px_1fr] xl:grid-cols-[260px_1fr]">
      <Card className={styles.leftCard}>
        <span className={styles.leftCardText}>Всего вакансий</span>
        <span className={styles.leftCardCount}>{count}</span>
      </Card>

      <Card className={styles.rightCard}>
        <div className={styles.rightCardWrapper}>
          <span className={styles.rightCardTitle}>Начальный</span>
          <span className={styles.rightCardPrice}>
            {convertPrice(juniorSalary)}
          </span>

          <div className={styles.rightCardIconWrapper}>
            <StarIcon className={styles.iconPrimary} />
            <StarIcon className={styles.iconGhost} />
            <StarIcon className={styles.iconGhost} />
          </div>
        </div>

        <div className={styles.rightCardWrapper}>
          <span className={styles.rightCardTitle}>Средний</span>
          <span className={styles.rightCardPrice}>
            {convertPrice(middleSalary)}
          </span>

          <div className={styles.rightCardIconWrapper}>
            <StarIcon className={styles.iconPrimary} />
            <StarIcon className={styles.iconPrimary} />
            <StarIcon className={styles.iconGhost} />
          </div>
        </div>

        <div className={styles.rightCardWrapper}>
          <span className={styles.rightCardTitle}>Профессионал</span>
          <span className={styles.rightCardPrice}>
            {convertPrice(seniorSalary)}
          </span>

          <div className={styles.rightCardIconWrapper}>
            <StarIcon className={styles.iconPrimary} />
            <StarIcon className={styles.iconPrimary} />
            <StarIcon className={styles.iconPrimary} />
          </div>
        </div>
      </Card>
    </div>
  );
};
