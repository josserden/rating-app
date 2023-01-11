import { FC } from 'react';
import { AdvantagesProps } from './Advantages.props';
import { CheckIcon } from '@heroicons/react/24/outline';
import styles from './Advantages.module.css';

export const Advantages: FC<AdvantagesProps> = ({ advantages }) => {
  return (
    <ul className={styles.wrapper}>
      {advantages.map((advantage) => (
        <li key={advantage._id} className={styles.item}>
          {advantage.title && (
            <>
              <span className={styles.iconWrapper}>
                <CheckIcon className={styles.icon} />
              </span>

              <h3 className={styles.title}>{advantage.title}</h3>

              <span className={styles.border}></span>
            </>
          )}

          {advantage.description && (
            <p className={styles.description}>{advantage.description}</p>
          )}
        </li>
      ))}
    </ul>
  );
};
