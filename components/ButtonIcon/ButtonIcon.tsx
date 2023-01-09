import classNames from 'classnames';
import styles from './ButtonIcon.module.css';
import { ButtonIconProps, icons } from './ButtonIcon.props';

export const ButtonIcon = ({
  appearance,
  icon,
  className,
  ...props
}: ButtonIconProps): JSX.Element => {
  const Icon = icons[icon];

  return (
    <button
      className={classNames(
        styles.button,
        {
          [styles.primary]: appearance == 'primary',
          [styles.white]: appearance == 'white',
        },
        className
      )}
      type="button"
      {...props}
    >
      <Icon className={styles.icon} />
    </button>
  );
};
