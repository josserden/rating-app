import { NotificationProps } from './Notification.props';
import { XMarkIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';

export const Notification = ({
  title,
  message,
  status = 'success',
  onClose,
  ...props
}: NotificationProps): JSX.Element => {
  return (
    <div
      className={`${
        status == 'success' ? 'bg-green-100' : 'bg-red-100'
      } relative mt-4 grid grid-cols-1 gap-4 rounded-lg border p-4  text-gray-600 shadow-lg`}
      {...props}
    >
      <button
        className={classNames(
          'absolute top-3 right-3  transition-colors hover:text-green-500 focus:text-green-500',
          {
            'text-green-700 hover:text-green-500 focus:text-green-500':
              status == 'success',
            'text-red-700 hover:text-red-700 focus:text-red-700':
              status == 'error',
          }
        )}
        type="button"
        onClick={onClose}
      >
        <XMarkIcon
          className={`${
            status == 'success' ? 'text-green-700' : 'text-red-700}'
          } h-5 w-5`}
        />
      </button>

      <strong className="text-sm text-gray-800">{title}</strong>

      <p className="text-sm tracking-tight ">{message}</p>
    </div>
  );
};
