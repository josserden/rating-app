import classNames from 'classnames';
import styles from './ButtonIcon.module.css';
import { ButtonIconProps, icons } from './ButtonIcon.props';

export const ButtonIcon = ({
  appearance,
  icon,
  ...props
}: ButtonIconProps): JSX.Element => {
  const Icon = icons[icon];

  return (
    <button
      className={classNames(styles.button, {
        [styles.primary]: appearance == 'primary',
        [styles.white]: appearance == 'white',
      })}
      type="button"
      {...props}
    >
      <Icon className={styles.icon} />
    </button>
  );
};
