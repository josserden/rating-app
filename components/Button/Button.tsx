import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

export const Button = ({
  appearance,
  arrow = 'none',
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileFocus={{ scale: 1.05 }}
      className={classNames(styles.button, className, {
        [styles.primary]: appearance == 'primary',
        [styles.ghost]: appearance == 'ghost',
        [styles.hasIcon]: arrow != 'none',
      })}
      {...props}
    >
      {children}

      {arrow != 'none' && (
        <ChevronRightIcon
          className={classNames(styles.icon, className, {
            [styles.rotate]: arrow == 'down',
          })}
        />
      )}
    </motion.button>
  );
};
