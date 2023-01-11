import { FC } from 'react';
import classNames from 'classnames';
import { Paragraph } from '../../components';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';

export const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer className={classNames(styles.footer, className)} {...props}>
      <Paragraph className={styles.footerText}>
        RatingApp © 2020 - {new Date().getFullYear()} Все права защищены
      </Paragraph>

      <Paragraph className={styles.footerText}>
        Пользовательское соглашение
      </Paragraph>

      <Paragraph className={styles.footerText}>
        Политика конфиденциальности
      </Paragraph>
    </footer>
  );
};
