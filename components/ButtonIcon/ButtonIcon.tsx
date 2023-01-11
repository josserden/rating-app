import { motion } from 'framer-motion';
import classNames from 'classnames';
import styles from './ButtonIcon.module.css';
import { ButtonIconProps, icons } from './ButtonIcon.props';
import { FC } from 'react';

export const ButtonIcon: FC<ButtonIconProps> = ({
  appearance,
  icon,
  className,
  ...props
}) => {
  const Icon = icons[icon];

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileFocus={{ scale: 1.05 }}
      className={classNames(
        styles.button,
        {
          [styles.primary]: appearance == 'primary',
          [styles.white]: appearance == 'white',
        },
        className
      )}
      type="button"
      aria-label={icon}
      {...props}
    >
      <Icon className={styles.icon} />
    </motion.button>
  );
};
